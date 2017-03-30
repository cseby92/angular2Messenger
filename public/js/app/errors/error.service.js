import { EventEmitter } from '@angular/core';
import { Error } from './error.model';
export var ErrorService = (function () {
    function ErrorService() {
        this.errorOccured = new EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new Error(error.title, error.error.message);
        this.errorOccured.emit(errorData);
    };
    return ErrorService;
}());
//# sourceMappingURL=error.service.js.map