import { Module } from '@nestjs/common';
import { ConfigsController } from './configs.controller';
import { ConfigService } from './config.service';

@Module({
  controllers: [ConfigsController],
  providers: [ConfigService],
})
export class ConfigsModule {}
