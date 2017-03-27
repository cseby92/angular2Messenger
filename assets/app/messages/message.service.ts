import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable} from "rxjs";

import { Message } from './message.model';
import { ErrorService } from '../errors/error.service';


@Injectable()

export class MessageService{
    
    messageAdded: EventEmitter<any> = new EventEmitter();
    messageDeleted: EventEmitter<any> = new EventEmitter();

    private messages: Message[] = [];

    constructor(private http: Http, private errorService: ErrorService){}

    addMessage(message: Message){

        const body = JSON.stringify(message);
                console.log('BODY:' + body);

        const header = new Headers({
            'Content-Type': 'application/json'
        });

        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/message' + token, body, { headers: header})
            .map((response: Response) =>{
               const result = response.json();
               const message =  new Message(
                   result.obj.content, 
                   result.obj.user.firstName,
                   result.obj._id,
                   result.obj.user._id
                );
               this.messages.push(message);
               this.messageAdded.emit(this.messages.length-1);
               return message;
            })
            .catch( (error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });

        }

    getMessages(){
        return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for(let message of messages){
                    transformedMessages.push(new Message(
                        message.content, 
                        message.user.firstName , 
                        message._id, 
                        message.user._id )
                    );
                    this.messageAdded.emit(this.messages.length-1);

                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch( (error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });    }

    deleteMessage(message: Message){
        const index = this.messages.indexOf(message);
        this.messages.splice(index, 1);

        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token')
            : '';

          return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
            .map((response: Response) => {
                console.log(response.json());
                this.messageDeleted.emit(index);
                return response.json();

            })
            .catch( (error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });    }

    editMessage(oldMessage: Message, editedContent: string){
        
        oldMessage.content = editedContent;
        const body = JSON.stringify(oldMessage);
        const header = new Headers({
            'Content-Type': 'application/json'
        });

        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token')
            : '';

        return this.http.patch('http://localhost:3000/message/' + oldMessage.messageId + token, body, { headers: header})
            .map((response: Response) => response.json())
            .catch( (error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });    }
}