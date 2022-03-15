import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  constructor(@Inject('MESSAGE_MODEL') private configModel: Model<Message>) {}

  async create(data: any) {
    const configEntity = new this.configModel(data);

    return configEntity.save();
  }

  async findOneById(id: string): Promise<Message> {
    return this.configModel.findById(id);
  }
}
