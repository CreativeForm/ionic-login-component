import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastService {

  constructor(private toastCtrl: ToastController) {}

  presentToast(message: string) {
    let toastItem = {
      "duration": 1000,
      "position": "buttom"
    };
    toastItem["message"] = message;
    let toast = this.toastCtrl.create(toastItem);
    toast.present();
  }
}
