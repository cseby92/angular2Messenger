import { EventEmitter, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Message } from './message.model';
import { ErrorService } from '../errors/error.service';
export var MessageService = (function () {
    function MessageService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.messageAdded = new EventEmitter();
        this.messageDeleted = new EventEmitter();
        this.messages = [];
    }
    MessageService.prototype.addMessage = function (message) {
        var _this = this;
        var body = JSON.stringify(message);
        console.log('BODY:' + body);
        var header = new Headers({
            'Content-Type': 'application/json'
        });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/message' + token, body, { headers: header })
            .map(function (response) {
            var result = response.json();
            var message = new Message(result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);
            _this.messages.push(message);
            _this.messageAdded.emit(_this.messages.length - 1);
            return message;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageService.prototype.getMessages = function () {
        var _this = this;
        return this.http.get('http://localhost:3000/message')
            .map(function (response) {
            var messages = response.json().obj;
            var transformedMessages = [];
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                transformedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
                _this.messageAdded.emit(_this.messages.length - 1);
            }
            _this.messages = transformedMessages;
            return transformedMessages;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageService.prototype.deleteMessage = function (message) {
        var _this = this;
        var index = this.messages.indexOf(message);
        this.messages.splice(index, 1);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
            .map(function (response) {
            console.log(response.json());
            _this.messageDeleted.emit(index);
            return response.json();
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageService.prototype.editMessage = function (oldMessage, editedContent) {
        var _this = this;
        oldMessage.content = editedContent;
        var body = JSON.stringify(oldMessage);
        var header = new Headers({
            'Content-Type': 'application/json'
        });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/message/' + oldMessage.messageId + token, body, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MessageService.ctorParameters = [
        { type: Http, },
        { type: ErrorService, },
    ];
    return MessageService;
}());
//# sourceMappingURL=message.service.js.map