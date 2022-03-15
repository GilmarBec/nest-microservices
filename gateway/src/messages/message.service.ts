import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { GenerateDefaultOptions } from '../common/proxy.default.options';
import { Observable } from 'rxjs';
import { MessageRequest, MessageResponse } from './dtos/message.dto';

export class MessageService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(GenerateDefaultOptions(8002));
  }

  createMessage(message: MessageRequest): Observable<MessageResponse> {
    return this.client.send<MessageResponse, MessageRequest>(
      'create_message',
      message,
    );
  }

  findMessage(id: string): Observable<MessageResponse> {
    return this.client.send<MessageResponse, string>('find_message', id);
  }
}
