import { Transport } from '@nestjs/microservices';
import { ClientOptions } from '@nestjs/microservices/interfaces/client-metadata.interface';

export function GenerateDefaultOptions(port: number): ClientOptions {
  return {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: port,
    },
  };
}
