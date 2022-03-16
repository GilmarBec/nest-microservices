import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  constructor(@Inject('MESSAGE_MODEL') private configModel: Model<Message>) {}

  async create(data: any) {
    const configEntity = new this.configModel({
      ...data,
      timestamp: new Date().getTime(),
    });

    return configEntity.save();
  }

  async findAll(limit = 100): Promise<Message[]> {
    return this.configModel.find().limit(limit).sort({ timestamp: 'desc' });
  }

  async findOneById(id: string): Promise<Message> {
    return this.configModel.findById(id);
  }
}
