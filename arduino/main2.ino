#include "DHT.h"
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

const char *ssid = "Tec-IoT";
const char *password = "spotless.magnetic.bridge";

const int ID_PLANT = 1;

unsigned long previousMillis = 0;
const unsigned long submissionInterval = 60000 * 20;

DHT dht(0, DHT11); // DHT read from digital pin 3

WiFiServer server(80);

int d5 = 14; // Fotorresistencia
int d6 = 12; // Humedad en tierra
int d7 = 13; // Nivel de agua
int d1 = 5;  // Bomba de agua

void setup()
{
    dht.begin();
    Serial.begin(9600);
    pinMode(d5, OUTPUT);
    pinMode(d6, OUTPUT);
    pinMode(d7, OUTPUT);
    pinMode(d1, OUTPUT);
    pinMode(A0, INPUT);
    digitalWrite(d5, LOW);
    digitalWrite(d6, LOW);
    digitalWrite(d7, LOW);
    digitalWrite(d1, LOW);
    delay(1000);

    // Internet connection
    Serial.print("Wifi connecting to ");
    Serial.println(ssid);

    WiFi.begin(ssid, password);

    Serial.println();
    Serial.print("Connecting");

    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print(".");
    }

    Serial.println();

    Serial.println("Wifi Connected Success!");
    Serial.print("NodeMCU IP Address : ");
    Serial.println(WiFi.localIP());

    server.begin();
    Serial.println("NodeMCU Server started");

    // Print the IP address
    Serial.print("Use this URL to connect: ");
    Serial.print("http://");
    Serial.print(WiFi.localIP());
    Serial.println("/");
}

void loop()
{

    unsigned long currentMillis = millis();
    // Read values from sensors

    delay(3000);

    float h = dht.readHumidity();
    float t = dht.readTemperature();

    digitalWrite(d5, HIGH);
    delay(100);
    float l = analogRead(A0);
    digitalWrite(d5, LOW);

    digitalWrite(d6, HIGH);
    delay(100);
    float tierra = analogRead(A0);
    digitalWrite(d6, LOW);

    digitalWrite(d7, HIGH);
    delay(100);
    float nivelAgua = analogRead(A0);
    digitalWrite(d7, LOW);

    Serial.print("Humedad: ");
    Serial.print(h);
    Serial.print("%  ");

    Serial.print("Temperatura: ");
    Serial.print(t);
    Serial.print(" C ");

    Serial.print("  Humedad en Tierra: ");
    tierra = map(tierra, 0, 1023, 100, 0);
    Serial.print(tierra);
    Serial.print("% ");

    Serial.print("  Luz: ");
    l = map(l, 0, 1023, 100, 0);
    Serial.print(l);
    Serial.print("%");

    Serial.print("  Agua: ");
    nivelAgua = map(nivelAgua, 0, 1023, 0, 100);
    Serial.print(nivelAgua);
    Serial.println("%");

    // Prender bomba
    // digitalWrite(d1, HIGH);
    // delay(3000);
    // digitalWrite(d1, LOW);

    // Client server
    //  Check if a client has connected
    WiFiClient client;

    // Client
    HTTPClient http;

    if (currentMillis - previousMillis >= submissionInterval)
    {
        previousMillis = currentMillis;

        http.begin(client, "http://plantybackendservice-env.eba-k33wfpak.us-east-1.elasticbeanstalk.com/measurement");
        http.addHeader("Content-Type", "application/json");

        StaticJsonDocument<96> doc;

        JsonObject obj = doc.to<JsonObject>();

        doc["airHumidity"] = h;
        doc["temperature"] = t;
        doc["light"] = l;
        doc["earthHumidity"] = tierra;
        doc["waterLevel"] = nivelAgua;
        doc["idPlant"] = ID_PLANT;

        String output = "";
        serializeJson(doc, output);
        int httpCode = http.POST(output);

        if (httpCode > 0)
        {
            String payload = http.getString();
            Serial.println("Status code: " + String(httpCode));
            Serial.println(payload);

            http.end();
        }
        else
        {
            Serial.println("Error on HTTP request");
        }
    }

    client = server.available();
    if (!client)
    {
        return;
    }
    // Wait until the client sends some data
    Serial.println("Hello New client");
    while (!client.available())
    {
        delay(1);
    }

    // Read the first line of the request
    String request = client.readStringUntil('\r');
    Serial.println(request);
    client.flush();

    // Turn On or Off a LED
    int value = LOW;
    if (request.indexOf("/LED=ON") != -1)
    {
        digitalWrite(d1, HIGH);
        value = HIGH;
    }
    if (request.indexOf("/LED=OFF") != -1)
    {
        digitalWrite(d1, LOW);
        value = LOW;
    }

    // Return the response
    client.println("HTTP/1.1 200 OK");
    client.println("Content-Type: text/html");
    client.println("");
    client.println("<!DOCTYPE HTML>");
    client.println("<html>");

    client.print("Led pin is now: ");

    if (value == HIGH)
    {
        client.print("On");
    }
    else
    {
        client.print("Off");
    }

    client.println("<br><br>");
    client.println("<a href=\"/LED=ON\"\"><button>Turn On </button></a>");
    client.println("<a href=\"/LED=OFF\"\"><button>Turn Off </button></a><br />");
    client.println("<br><br/>");

    client.print("Temperatura: ");
    client.print(t);
    client.print(" C  ");

    client.print("Humedad: ");
    client.print(h);
    client.print(" %  ");
    client.println("</html>");

    delay(10);
    Serial.println("Client disonnected");
    Serial.println("");
}