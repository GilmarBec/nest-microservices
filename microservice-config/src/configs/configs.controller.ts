import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from './config.service';
import { MessagePattern } from '@nestjs/microservices';
import { Config } from './entities/config.entity';

@Controller('configs')
export class ConfigsController {
  private logger = new Logger('ConfigsController');

  constructor(private configService: ConfigService) {}

  @MessagePattern('create_config')
  async createAction(): Promise<Config> {
    this.logger.log('Called create_config');
    return this.configService.create();
  }

  @MessagePattern('update_config')
  async updateAction(body: string): Promise<Config> {
    const { id, lightOffIn } = JSON.parse(body);
    this.logger.log('Called update_config');
    return this.configService.update(id, lightOffIn);
  }

  @MessagePattern('find_config')
  async getAction(id: string): Promise<Config> {
    this.logger.log('Called find_config');
    return this.configService.findOneById(id);
  }
}
