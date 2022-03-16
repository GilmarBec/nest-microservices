import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Response,
} from '@nestjs/common';
import { ConfigService } from './config.service';

@Controller('configs')
export class ConfigController {
  private logger = new Logger('ConfigsController');

  constructor(private configService: ConfigService) {}

  @Post('')
  public createAction(@Response() response) {
    this.logger.log('Sending message to create_config');
    this.configService.createConfig().subscribe((data) => {
      response.json(data);
    });
  }

  @Patch(':id')
  public updateAction(@Response() response, @Param('id') id, @Body() body) {
    this.logger.log('Sending message to update_config');
    this.configService.updateConfig(id, body.lightOffIn).subscribe((data) => {
      response.json(data);
    });
  }

  @Get(':id')
  public getAction(@Response() response, @Param('id') id) {
    this.logger.log('Sending message to find_config');
    this.configService.getConfigs(id).subscribe((data) => {
      response.json(data);
    });
  }
}
