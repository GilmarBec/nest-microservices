export interface MessageRequest {
  light: number;
  isLedOn: boolean;
  lightOffIn: number;
}

export interface MessageResponse extends MessageRequest {
  _id: string;
  timestamp: number;
  light: number;
  isLedOn: boolean;
  lightOffIn: number;
}
