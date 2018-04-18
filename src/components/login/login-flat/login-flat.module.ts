import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginFlat } from './login-flat';

@NgModule({
    declarations: [
        LoginFlat,
    ],
    imports: [
        IonicPageModule.forChild(LoginFlat),
    ],
    exports: [
        LoginFlat
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginFlatModule { }
