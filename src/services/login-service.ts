import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    constructor() { }


    /*  Login Universal Data
    ==============================*/
    getDataForLoginFlat = () => {
        let data = {
            "logo": "assets/images/csform-logo.png",
            "btnLogin": "Login",
            "txtUsername" : "Username",
            "txtPassword" : "Password",
            "txtForgotPassword" : "Forgot password?",
            "btnResetYourPassword": "Reset your password",
            "txtSignupnow" : "Don't have an account?",
            "btnSignupnow": "Signup now",
            "title": "Welcome back,",
            "subtitle": "please login to your account.",
            "errorUser" : "Field can't be empty.",
            "errorPassword" : "Field can't be empty."
        };
        return data;
    };


}
