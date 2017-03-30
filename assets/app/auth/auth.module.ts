import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {LogoutComponent} from "./logout.component";
import {SigninComponent} from "./signin.component";
import {SignupComponent} from "./signup.component";
import { authRougint } from './auth.routing';


@NgModule({
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

})

export class AuthModule{

}