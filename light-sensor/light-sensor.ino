int pinoLed = 11;
int pinoSensorLuz = A0;
int valorLuz = 0;
bool isLedOn = false;
String message = "";
int lightOffIn = 0;
const unsigned int MAX_MESSAGE_LENGTH = 4;

void setup() {
     pinMode(pinoLed,OUTPUT);
     Serial.begin(9600);
}

void loop() {
  valorLuz = analogRead(pinoSensorLuz);

  while (Serial.available() > 0) {
    static char message[MAX_MESSAGE_LENGTH];
    static unsigned int message_pos = 0;
    char inByte = Serial.read();

    if (inByte != '\n' && (message_pos < MAX_MESSAGE_LENGTH)) {
      message[message_pos] = inByte;
      message_pos++;
    } else {
      message[message_pos] = '\0';
      lightOffIn = atoi(message);
      message_pos = 0;
    }
  }

  isLedOn = valorLuz < lightOffIn;

  message = message + "{\"light\": " + valorLuz + ", \"isLedOn\": " + isLedOn + ", \"lightOffIn\": " + lightOffIn + "}";
  Serial.println(message);

  if(isLedOn) {
    digitalWrite(pinoLed,HIGH);
  } else {
    digitalWrite(pinoLed,LOW);
  }

  message = "";
  
  delay(500);                  
}
