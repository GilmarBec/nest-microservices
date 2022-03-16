const unsigned int pinoLed = 11;
const unsigned int pinoSensorLuz = A0;
const unsigned int MAX_MESSAGE_LENGTH = 4;
String response = "";
unsigned int lightOffIn = 0;

void setup() {
     pinMode(pinoLed, OUTPUT);
     Serial.begin(9600);
}

void loop() {
  unsigned int valorLuz = analogRead(pinoSensorLuz);

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

  bool isLedOn = valorLuz < lightOffIn;

  response = response + "{\"light\": " + valorLuz + ", \"isLedOn\": " + isLedOn + ", \"lightOffIn\": " + lightOffIn + "}";
  Serial.println(response);

  if(isLedOn) {
    digitalWrite(pinoLed,HIGH);
  } else {
    digitalWrite(pinoLed,LOW);
  }

  response = "";

  delay(500);
}
