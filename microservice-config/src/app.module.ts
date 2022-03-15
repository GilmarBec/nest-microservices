import { Module } from '@nestjs/common';
import { ConfigModule } from './configs/config.module';
import { DatabaseModule } from './databases/database.module';

@Module({
  imports: [ConfigModule, DatabaseModule],
})
export class AppModule {}
