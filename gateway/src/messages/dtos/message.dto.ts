export interface MessageRequest {
  timestamp: number;
  message: string;
}

export interface MessageResponse extends MessageRequest {
  _id: string;
}
