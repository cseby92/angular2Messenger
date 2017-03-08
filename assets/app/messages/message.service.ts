import { Message } from './message.model';
import { messageInputComponent } from './message-input.component';
export class MessageService{
    private messages: Message[] = [];

    addMessage(message: Message){
        this.messages.push(message);
        console.log(this.messages);
    }

    getMessages(){
        return this.messages;
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}