import { Injectable } from '@angular/core';

@Injectable()
export class ResetPasswordService {

    constructor() { }

    /*  Reset Password Dark Data
    =============================*/
    getDataForResetPassowrdDark = () => {
        let data = {
            "btnResetPassword" : "Reset password",
            "txtDontHaveAccount": "Don't have a account?",
            "btnSignupNow": "Signup now",
            "txtEmail": "Your email",
            "title": "Fashion Store",
            "btnLogin": "Login",
            "btnSignUp": "Signup",
            "backgroundImages": "assets/images/dark-3.jpg",
            "errorEmail": "Invalid email address."
        };
        return data;
    };

    /*  Reset Password Universal Data
    ===================================*/
    getDataForResetPassowrdFlat = () => {
        let data = {
            "btnResetPassword":"Reset password",
            "txtDontHaveAccount": "Don't have a account?",
            "btnSignupNow": "Signup now",
            "txtEmail": "Your Email",
            "title": "Forgot password?",
            "subtitle": "Enter your email and we will send it to your mail.",
            "logo": "assets/images/csform-logo.png",
            "errorEmail": "Invalid email address."
        };
        return data;
    };

    /*  Reset Password Light Data
    =============================*/
    getDataForResetPassowrdLight = () => {
        let data = {
            "btnResetPassword" : "Reset password",
            "txtResetPassword": "Reset password",
            "txtDontHaveAccount": "Don't have a account?",
            "btnSignupNow": "Signup now",
            "txtEmail": "Your email",
            "title": "Tech Shop",
            "btnLogin": "Login",
            "backgroundImages": "assets/images/light-2.jpg",
            "errorEmail": "Invalid email address."
        };
        return data;
    }
}
