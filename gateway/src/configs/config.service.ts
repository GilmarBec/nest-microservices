import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { ConfigResponse } from './dtos/config.interface';
import { GenerateDefaultOptions } from '../common/proxy.default.options';
import { Observable } from 'rxjs';

export class ConfigService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(GenerateDefaultOptions(8001));
  }

  public createConfigs(): Observable<ConfigResponse> {
    return this.client.send<ConfigResponse, number>('create_config', 1);
  }

  public getConfigs(id: string) {
    return this.client.send<ConfigResponse, string>('find_config', id);
  }
}
