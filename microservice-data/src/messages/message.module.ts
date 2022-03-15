import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { messageProviders } from './schemas/message.provider';
import { DatabaseModule } from '../databases/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MessageController],
  providers: [MessageService, ...messageProviders],
})
export class MessageModule {}
