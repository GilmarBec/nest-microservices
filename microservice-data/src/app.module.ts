import { Module } from '@nestjs/common';
import { DatabaseModule } from './databases/database.module';
import { MessageModule } from './messages/message.module';

@Module({
  imports: [DatabaseModule, MessageModule],
})
export class AppModule {}
