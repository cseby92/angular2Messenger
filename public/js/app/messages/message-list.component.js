import { Component, ViewChild } from "@angular/core";
import { MessageService } from './message.service';
export var MessageListComponent = (function () {
    function MessageListComponent(messageService) {
        var _this = this;
        this.messageService = messageService;
        this.displayState = [];
        this.messageService.messageAdded.subscribe(function (index) {
            _this.addDisplayStateElement(index);
        });
        this.messageService.messageDeleted.subscribe(function (index) {
            _this.deleteDisplayStateElement(index);
        });
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    MessageListComponent.prototype.onEditClicked = function (i) {
        if (this.displayState[i] === 'none')
            this.displayState[i] = 'block';
        else {
            this.displayState[i] = 'none';
            this.editComponent.resetInput();
        }
    };
    MessageListComponent.prototype.addDisplayStateElement = function (index) {
        this.displayState.push('none');
    };
    MessageListComponent.prototype.deleteDisplayStateElement = function (index) {
        this.displayState.splice(index, 1);
    };
    MessageListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-message-list',
                    templateUrl: './message-list.component.html'
                },] },
    ];
    /** @nocollapse */
    MessageListComponent.ctorParameters = [
        { type: MessageService, },
    ];
    MessageListComponent.propDecorators = {
        'editComponent': [{ type: ViewChild, args: ['edit',] },],
    };
    return MessageListComponent;
}());
//# sourceMappingURL=message-list.component.js.map