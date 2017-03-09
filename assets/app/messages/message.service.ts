import { Message } from './message.model';
import { messageInputComponent } from './message-input.component';
import { EventEmitter } from '@angular/core';
export class MessageService{
    
    messageAdded: EventEmitter<any> = new EventEmitter();
    messageDeleted: EventEmitter<any> = new EventEmitter();

    private messages: Message[] = [];

    addMessage(message: Message){
        this.messages.push(message);
        this.messageAdded.emit(this.messages.length-1);
    }

    getMessages(){
        return this.messages;
    }

    deleteMessage(message: Message){
        const index = this.messages.indexOf(message);
        this.messages.splice(this.messages.indexOf(message), 1);
        this.messageDeleted.emit(index);
    }

    editMessage(oldMessage: Message, newMessage: Message){
        const index = this.messages.indexOf(oldMessage);
        this.messages[index] = newMessage;
    }
}