import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

import { HttpService } from '../services/HttpService';
import { MailChimpService } from '../services/mail-chimp-service';

@Component({
  templateUrl: 'app.html',
  providers: [HttpService, MailChimpService]
})
export class MyApp {
  private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  rootPage: any = "HomePage";

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private httpService: HttpService,
    public alertCtrl: AlertController,
    private mailChimpService: MailChimpService) {

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      localStorage.setItem("mailChimpLocal", "true");
      this.showPrompt();
    });
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'STAY TUNED FOR NEW <br> THEMES AND FREEBIES',
      message: "SUBSCRIBE TO <br> OUR NEWSLETTER",
      inputs: [
        {
          name: 'email',
          placeholder: 'Your e-mail'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Send',
          handler: data => {
            if (data) {
              if (this.regex.test(data.email)) {
                this.httpService.sendData(data.email).subscribe(
                  data => {
                    this.mailChimpService.hideMailChimp();
                  }, err => {
                    alert(err);
                  }, null);
              } else {
                return false;
              }
            } else {
              return false
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
