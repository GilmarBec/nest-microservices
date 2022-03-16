import { GatewayClient } from '../gateway.client';
import { SerialPort } from 'serialport';

export class ConfigService {
  private gatewayClient: GatewayClient;
  private lightOffIn?: number;

  constructor(private port: SerialPort) {
    this.gatewayClient = new GatewayClient();
  }

  async updateLightOffIn() {
    return this.gatewayClient
      .getConfig(process.env.CONFIG_ID)
      .then((config) => {
        if (this.lightOffIn !== config.lightOffIn){
          this.lightOffIn = config.lightOffIn;
          this.port.write(`${config.lightOffIn}\n`, console.log)
        }
      });
  }
}
