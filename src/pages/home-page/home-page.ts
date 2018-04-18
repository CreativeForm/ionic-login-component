import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'home-page',
  templateUrl: 'home-page.html'
})
export class HomePage {

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'UNIVERSAL', component:"LoginFlatPage" },
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    this.navCtrl.push(page.component);
  }
}
