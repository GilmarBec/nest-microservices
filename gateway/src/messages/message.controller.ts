import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { MessageService } from './message.service';
import { Response } from 'express';

@Controller('messages')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post()
  createAction(@Res() request: Response, @Body() message: any) {
    this.messageService
      .createMessage(message)
      .subscribe((message) => request.status(201).json(message));
  }

  @Get('')
  findAllAction(@Res() request: Response, @Query('limit') limit = 100) {
    this.messageService.findAllMessages(limit).subscribe((messages) => {
      request.json(messages);
    });
  }

  @Get(':id')
  findAction(@Res() request: Response, @Param('id') id: string) {
    this.messageService.findMessage(id).subscribe((message) => {
      request.json(message);
    });
  }
}
