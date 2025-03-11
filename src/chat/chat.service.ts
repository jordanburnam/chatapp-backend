import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';



@Injectable()
export class ChatService {

    private messageSubject:Subject<string> = new Subject<string>();

    constructor() {

    }

    get messageStream():Observable<string> {
        return this.messageSubject.asObservable();
    }

    broadcastMessage(message:string) {
        this.messageSubject.next(message)
    }
}
