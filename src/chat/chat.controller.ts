import { Body, Controller, Get, Param, Post, Query, Sse } from '@nestjs/common';
import { ChatService } from './chat.service';
import { map, Observable } from 'rxjs';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService:ChatService) 
    {
        
    }

    @Sse('sse')
    sse():Observable<{data:string}> {
      return this.chatService.messageStream.pipe(
        map((data: string) => ({
          data,
        })),
      );
    }

    @Post('message')
    send(@Body() body: {message:string}) {
        const { message } = body;
        this.chatService.broadcastMessage(message);
        return {"status": 'ok'}
    }

    @Get('message')
    message(@Query('message') message:string){
        return 'You said ' + message
    }

    
}
