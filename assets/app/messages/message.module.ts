import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { MessageListComponent } from './message-list.component';
import { MessageInputComponent } from './message-input.component';
import { MessageEditComponent } from './message-edit.component';
import { MessagesComponent } from './messages.component';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from './message.service';

@NgModule({
    declarations: [
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessageEditComponent,
        MessagesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule 
    ],
    providers: [MessageService]
})

export class MessageModule {

}