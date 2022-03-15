import { Module } from '@nestjs/common';
import { ConfigsController } from './configs.controller';
import { ConfigService } from './config.service';
import { usersProviders } from './schemas/config.provider';
import { DatabaseModule } from '../databases/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ConfigsController],
  providers: [ConfigService, ...usersProviders],
})
export class ConfigModule {}
