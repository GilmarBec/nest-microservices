import axios from 'axios';
import { ConfigDto } from './dtos/config.dto';
import { MessageDto } from './dtos/message.dto';

export class GatewayClient {
  getConfig(id: string): Promise<ConfigDto> {
    return axios.get<ConfigDto>(`${process.env.GATEWAY_URL}/configs/${id}`).then(({data}) => data);
  }

  sendMessage(message: MessageDto): Promise<ConfigDto> {
    console.log(message)
    return axios.post<MessageDto>(`${process.env.GATEWAY_URL}/messages`, message).then(({data}) => data);
  }
}
