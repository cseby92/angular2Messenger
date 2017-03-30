import { Component } from '@angular/core';
import { AuthService } from './auth.service';
export var AuthenticationComponent = (function () {
    function AuthenticationComponent(authService) {
        this.authService = authService;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AuthenticationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-authentication',
                    templateUrl: './authentication.component.html'
                },] },
    ];
    /** @nocollapse */
    AuthenticationComponent.ctorParameters = [
        { type: AuthService, },
    ];
    return AuthenticationComponent;
}());
//# sourceMappingURL=authentication.component.js.map