
int sensor = A0; 
int readFoto = A2;
int gasSensor = A3;

int DB4 = 5;
int DB5 = 4;
int DB6 = 3;
int DB7 = 2;
int RS = 7;

int valor = 0;

void setup()
{
    Serial.begin(9600);
}
void loop()
{
    int dirtHumidity = map(analogRead(sensor), 0, 1023, 0, 100);
    int fotoRes =  analogRead(readFoto);
  	int gasSensor = analogRead(gasSensor);
    if(dirtHumidity >)
	
}