import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './messages/message.component';
import {  MessageListComponent } from './messages/message-list.component';


import { AppComponent } from './app.component';
import { messageInputComponent } from './messages/message-input.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        messageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent
    ],
    imports: [BrowserModule,
                FormsModule,
                routing
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}