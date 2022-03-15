import { Module } from '@nestjs/common';
import { ConfigsModule } from './configs/configs.module';
import { MessageModule } from './messages/message.module';

@Module({
  imports: [ConfigsModule, MessageModule],
})
export class AppModule {}
