import { Connection } from 'mongoose';
import { ConfigSchema } from './config.schema';

export const usersProviders = [
  {
    provide: 'CONFIG_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Config', ConfigSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
