export interface Message {
  _id?: string;
  timestamp: number;
  light: number;
  isLedOn: boolean;
  lightOffIn: number;
}
