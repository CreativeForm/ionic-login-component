import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginService } from '../../services/login-service';
import { ToastService } from '../../services/toast-service'

@IonicPage()
@Component({
  selector: 'login-flat-page',
  templateUrl: 'login-flat-page.html',
  providers: [
    LoginService, ToastService
  ]
})
export class LoginFlatPage {

  /*  Necessary data and events
      ================================*/
  data : {};
  events: {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: LoginService, private toastCtrl: ToastService) {
    this.data = this.service.getDataForLoginFlat();
    this.events =  {
      "onLogin" : this.onLogin
    }
  }

  /*  Todo override this function with your logic
  =================================================*/
  onLogin = (params): void => {
    this.toastCtrl.presentToast('Login Now');
  };
}
