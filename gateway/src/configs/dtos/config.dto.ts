export interface ConfigRequest {
  lightOffIn: number;
}

export interface ConfigResponse extends ConfigRequest {
  _id: string;
}
