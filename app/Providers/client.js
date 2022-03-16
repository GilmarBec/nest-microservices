import { GATEWAY_URL } from '../configs/env';
import axios from 'axios';

export class Client {
  async findConfig(id) {
    return axios.get(`${GATEWAY_URL}/configs/${id}`)
      .then(({data}) => data);
  }

  async updateConfig(id, lightOffIn) {
    return axios.patch(`${GATEWAY_URL}/configs/${id}`, {lightOffIn})
      .then(({data}) => data);
  }
}

export default new Client();
