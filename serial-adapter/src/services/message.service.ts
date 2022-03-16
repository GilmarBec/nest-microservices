import { GatewayClient } from '../gateway.client';
import { MessageDto } from '../dtos/message.dto';

class MessageService {
  private gatewayClient: GatewayClient;

  constructor() {
    this.gatewayClient = new GatewayClient();
  }

  async sendMessage(message: MessageDto) {
    return this.gatewayClient.sendMessage(message);
  }
}

export default new MessageService();
