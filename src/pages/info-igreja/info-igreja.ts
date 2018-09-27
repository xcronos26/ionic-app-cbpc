import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoIgrejaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-igreja',
  templateUrl: 'info-igreja.html',
})
export class InfoIgrejaPage {
  info:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info = this.navParams.get('info');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoIgrejaPage');
  }

}
