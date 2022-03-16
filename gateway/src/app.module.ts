import { Module } from '@nestjs/common';
import { ConfigModule } from './configs/config.module';
import { MessageModule } from './messages/message.module';

@Module({
  imports: [ConfigModule, MessageModule],
})
export class AppModule {}
