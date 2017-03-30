import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from './message.service';
export var MessageComponent = (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
        this.editClicked = new EventEmitter();
    }
    MessageComponent.prototype.onEdit = function () {
        this.editClicked.emit();
    };
    MessageComponent.prototype.onDelete = function () {
        this.messageService.deleteMessage(this.message)
            .subscribe(function (result) { return console.log(result); });
    };
    MessageComponent.prototype.belongsToUser = function () {
        return localStorage.getItem('userId') === this.message.userId;
    };
    MessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-message',
                    templateUrl: './message.component.html',
                    styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-allign: right;\n            font-size: 12px;\n            width: 19%;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    MessageComponent.ctorParameters = [
        { type: MessageService, },
    ];
    MessageComponent.propDecorators = {
        'message': [{ type: Input },],
        'editClicked': [{ type: Output },],
    };
    return MessageComponent;
}());
//# sourceMappingURL=message.component.js.map