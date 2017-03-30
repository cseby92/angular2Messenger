import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';
export var MessageInputComponent = (function () {
    function MessageInputComponent(messageService) {
        this.messageService = messageService;
    }
    MessageInputComponent.prototype.onSubmit = function (form) {
        var msg = new Message(form.value.content, 'Max');
        this.messageService.addMessage(msg)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        form.resetForm();
    };
    MessageInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-message-input',
                    templateUrl: './message-input.component.html',
                },] },
    ];
    /** @nocollapse */
    MessageInputComponent.ctorParameters = [
        { type: MessageService, },
    ];
    return MessageInputComponent;
}());
//# sourceMappingURL=message-input.component.js.map