import { Controller, Logger } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessagePattern } from '@nestjs/microservices';
import { Message } from './entities/message.entity';

@Controller('message')
export class MessageController {
  private logger = new Logger('MessageController');

  constructor(private messageService: MessageService) {}

  @MessagePattern('create_message')
  async createAction(data: any): Promise<Message> {
    this.logger.log('Called create_message');
    return this.messageService.create(data);
  }

  @MessagePattern('find_all_messages')
  async findAllAction(limit?: number): Promise<Message[]> {
    this.logger.log('Called find_all_messages');
    return this.messageService.findAll(limit);
  }

  @MessagePattern('find_message')
  async findAction(id: string): Promise<Message> {
    this.logger.log('Called find_message');
    return this.messageService.findOneById(id);
  }
}
