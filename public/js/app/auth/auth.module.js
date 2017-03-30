import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from "./logout.component";
import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";
import { authRougint } from './auth.routing';
export var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        LogoutComponent,
                        SigninComponent,
                        SignupComponent
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        authRougint
                    ]
                },] },
    ];
    /** @nocollapse */
    AuthModule.ctorParameters = [];
    return AuthModule;
}());
//# sourceMappingURL=auth.module.js.map