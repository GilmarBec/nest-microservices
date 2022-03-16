import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Config } from './entities/config.entity';

@Injectable()
export class ConfigService {
  constructor(@Inject('CONFIG_MODEL') private configModel: Model<Config>) {}

  async create() {
    const configEntity = new this.configModel({
      lightOffIn: 500,
    });

    return configEntity.save();
  }

  async findOneById(id: string): Promise<Config> {
    return this.configModel.findById(id);
  }
}
