import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from './message.service';
export var MessageEditComponent = (function () {
    function MessageEditComponent(messageService) {
        this.messageService = messageService;
        this.submitClicked = new EventEmitter();
    }
    MessageEditComponent.prototype.onSubmit = function () {
        this.messageService.editMessage(this.message, this.myForm.value.editField)
            .subscribe(function (result) { return console.log(result); });
        this.submitClicked.emit();
    };
    MessageEditComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            editField: new FormControl(this.message.content, Validators.required)
        });
    };
    MessageEditComponent.prototype.resetInput = function () {
        this.myForm.setValue({ "editField": this.message.content });
    };
    MessageEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-message-edit',
                    templateUrl: './message-edit.component.html',
                },] },
    ];
    /** @nocollapse */
    MessageEditComponent.ctorParameters = [
        { type: MessageService, },
    ];
    MessageEditComponent.propDecorators = {
        'message': [{ type: Input },],
        'submitClicked': [{ type: Output },],
    };
    return MessageEditComponent;
}());
//# sourceMappingURL=message-edit.component.js.map