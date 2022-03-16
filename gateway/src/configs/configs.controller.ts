import { Controller, Get, Logger, Param, Post, Response } from '@nestjs/common';
import { ConfigService } from './config.service';

@Controller('configs')
export class ConfigsController {
  private logger = new Logger('ConfigsController');

  constructor(private configService: ConfigService) {}

  @Post('')
  public createAction(@Response() response) {
    this.logger.log('Sending message to create_config');
    this.configService.createConfig().subscribe((data) => {
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
