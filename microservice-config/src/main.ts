import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('Main');

async function bootstrap() {
  const microserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: process.env.HOST,
      port: process.env.port,
    },
  };

  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );

  app.listen().then(() => {
    logger.log('Microservice is listen... ');
  });
}

bootstrap().catch(logger.error);
