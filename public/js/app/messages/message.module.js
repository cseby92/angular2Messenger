import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { MessageListComponent } from './message-list.component';
import { MessageInputComponent } from './message-input.component';
import { MessageEditComponent } from './message-edit.component';
import { MessagesComponent } from './messages.component';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from './message.service';
export var MessageModule = (function () {
    function MessageModule() {
    }
    MessageModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    MessageModule.ctorParameters = [];
    return MessageModule;
}());
//# sourceMappingURL=message.module.js.map