#include "DHT.h"
#include <ESP8266WiFi.h>

const char* ssid = "Tec-IoT";
const char* password = "spotless.magnetic.bridge";

DHT dht(0,DHT11); // DHT read from digital pin 3

WiFiServer server(80);

int d1 = 14; //Fotorresistencia
int d2 = 12; //Humedad en tierra

void setup() {
  dht.begin();
  Serial.begin(9600);
  pinMode(d1,OUTPUT);
  pinMode(d2,OUTPUT);
  pinMode(A0,INPUT);
  digitalWrite(d1, LOW);
  digitalWrite(d2, LOW);      
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

  // Read values from sensors
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  digitalWrite(d1, HIGH); 
  delay(100);
  float l = analogRead(A0);
  digitalWrite(d1, LOW); 

  digitalWrite(d2, HIGH); 
  delay(100);
  float tierra = analogRead(A0);
  digitalWrite(d2, LOW); 

  Serial.print("Humedad: ");
  Serial.print(h);
  Serial.print("%  ");
  
  Serial.print("Temperatura: ");
  Serial.print(t);
  Serial.print(" C ");

  Serial.print("  Humedad en Tierra: ");
  tierra = 0.1075*tierra - 19.3548; // tierra en porcentaje =  (100/máximo) - (el mínimo * 100 / máximo)
  tierra = 100 - tierra;
  Serial.print(tierra);
  Serial.print("% ");

  Serial.print("  Luz: ");
  l = 0.1*l - 0.1075; // luz en porcentaje = - (el mínimo * 100 / máximo) + (100/máximo)
  l = 100 - l;
  Serial.print(l);
  Serial.println("%");

  delay(800);

  //Client server
  // Check if a client has connected
  WiFiClient client = server.available();
  if (!client) {
    return;
  }

  // Wait until the client sends some data
  Serial.println("Hello New client");
  while (!client.available()) {
    delay(1);
  }

  // Read the first line of the request
  String request = client.readStringUntil('\r');
  Serial.println(request);
  client.flush();

  // Turn On or Off a LED

  int value = LOW;
  if (request.indexOf("/LED=ON") != -1) {
    digitalWrite(ledPin, HIGH);
    value = HIGH;
  }
  if (request.indexOf("/LED=OFF") != -1) {
    digitalWrite(ledPin, LOW);
    value = LOW;
  }

  // Return the response
  client.println("HTTP/1.1 200 OK");
  client.println("Content-Type: text/html");
  client.println("");
  client.println("<!DOCTYPE HTML>");
  client.println("<html>");

  client.print("Led pin is now: ");

  if (value == HIGH) {
    client.print("On");
  } else {
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
