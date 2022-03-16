import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { ConfigResponse } from './dtos/config.dto';
import { GenerateDefaultOptions } from '../common/proxy.default.options';
import { Observable } from 'rxjs';

export class ConfigService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(GenerateDefaultOptions(8001));
  }

  public createConfig(): Observable<ConfigResponse> {
    return this.client.send<ConfigResponse, number>('create_config', 1);
  }

  public updateConfig(id: string, lightOffIn: number) {
    return this.client.send<ConfigResponse, string>(
      'update_config',
      JSON.stringify({ id, lightOffIn }),
    );
  }

  public getConfigs(id: string) {
    return this.client.send<ConfigResponse, string>('find_config', id);
  }
}
