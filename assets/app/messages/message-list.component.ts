import { Component, OnInit, ViewChild } from "@angular/core";

import { Message } from "./message.model";
import { MessageService } from './message.service';
import { messageEditComponent } from './message-edit.component';


@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html'
})

export class MessageListComponent implements OnInit{
    
    @ViewChild('edit') private editComponent: messageEditComponent;

    messages: Message[];
    displayState = [];

    constructor(private messageService : MessageService){
        this.messageService.messageAdded.subscribe(
            (index) => {
                this.addDisplayStateElement(index);
            }
        );
        this.messageService.messageDeleted.subscribe(
            (index) => {
                this.deleteDisplayStateElement(index);
            }
        );
    }

    ngOnInit(){
        this.messageService.getMessages()
            .subscribe(
                (messages: Message[]) => {
                    this.messages = messages;
                });
    }

    onEditClicked(i: number){
        if(this.displayState[i] === 'none')
            this.displayState[i] = 'block';
        else{
            this.displayState[i] = 'none';
            this.editComponent.resetInput();
        }
    }
    addDisplayStateElement(index){
        this.displayState.push('none');
    }

    deleteDisplayStateElement(index){
        this.displayState.splice(index, 1);
    }
}