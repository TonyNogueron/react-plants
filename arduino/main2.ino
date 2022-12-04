#include "DHT.h"
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "Tec-IoT";
const char* password = "spotless.magnetic.bridge";

const char* awsUrlm = "http://plantyrestapi-env.eba-iepsrv9a.us-east-1.elasticbeanstalk.com/measurement";
const String awsUrlp = "http://plantyrestapi-env.eba-iepsrv9a.us-east-1.elasticbeanstalk.com/pump";

const int ID_PLANT = 10;

unsigned long previousMillis = 0;
const unsigned long submissionInterval = 60000 * 5;

unsigned int pMillisPump = 0;
const unsigned int pumpInterval = 1000;

DHT dht(0, DHT11);  // DHT read from digital pin 3

WiFiServer server(80);

int d5 = 14;  //Fotorresistencia
int d6 = 12;  //Humedad en tierra
int d7 = 13;  // Bomba de agua

void setup() {
  dht.begin();
  Serial.begin(9600);
  pinMode(d5, OUTPUT);
  pinMode(d6, OUTPUT);
  //pinMode(d7, OUTPUT);
  pinMode(d7, OUTPUT);
  pinMode(A0, INPUT);
  digitalWrite(d5, LOW);
  digitalWrite(d6, LOW);
  //digitalWrite(d7, LOW);
  digitalWrite(d7, LOW);
  delay(1000);

  //Internet connection
  Serial.print("Wifi connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  Serial.println();
  Serial.print("Connecting");

  while (WiFi.status() != WL_CONNECTED) {
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

void loop() {

  unsigned long currentMillis = millis();
  // Read values from sensors

  delay(3000);

  float h = dht.readHumidity();
  float t = dht.readTemperature();

  digitalWrite(d5, HIGH);
  delay(200);
  float l = analogRead(A0);
  digitalWrite(d5, LOW);

  digitalWrite(d6, HIGH);
  delay(200);
  float tierra = analogRead(A0);
  digitalWrite(d6, LOW);

  //digitalWrite(d7, HIGH);
  //delay(100);
  //float nivelAgua = analogRead(A0);
  //digitalWrite(d7, LOW);

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
  Serial.println("%");

  WiFiClient client;
  //Client
  HTTPClient http;

  if (currentMillis - pMillisPump >= pumpInterval) {
    pMillisPump = currentMillis;
    http.begin(client, awsUrlp + "?id=10");
    int httpCode = http.GET();

    if (httpCode > 0) {
      String payload = http.getString();
      Serial.println("Status code: " + String(httpCode));
      Serial.println(payload);
      http.end();
      if (httpCode == 202) {
        // Prender bomba
        digitalWrite(d7, HIGH);
        delay(5000);
        digitalWrite(d7, LOW);
        http.begin(client, awsUrlp + "?id=10&status=0");
        int httpCode = http.PUT("ArduinoPut");
        if (httpCode > 0) {
          String payload = http.getString();
          Serial.println("Status code: " + String(httpCode));
          Serial.println(payload);
          http.end();
        } else {
          Serial.println("Error on HTTP request");
        }
      }
    } else {
      Serial.println("Error on HTTP request");
    }
  }


  if (currentMillis - previousMillis >= submissionInterval) {
    previousMillis = currentMillis;

    http.begin(client, awsUrlm);
    http.addHeader("Content-Type", "application/json");

    StaticJsonDocument<96> doc;

    JsonObject obj = doc.to<JsonObject>();

    doc["airHumidity"] = h;
    doc["temperature"] = t;
    doc["light"] = l;
    doc["earthHumidity"] = tierra;
    //doc["waterLevel"] = nivelAgua;
    doc["idPlant"] = ID_PLANT;

    String output = "";
    serializeJson(doc, output);
    int httpCode = http.POST(output);

    if (httpCode > 0) {
      String payload = http.getString();
      Serial.println("Status code: " + String(httpCode));
      Serial.println(payload);

      http.end();
    } else {
      Serial.println("Error on HTTP request");
    }
  }
}