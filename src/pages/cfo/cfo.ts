import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VocatioPage } from '../vocatio/vocatio';

/**
 * Generated class for the CfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cfo',
  templateUrl: 'cfo.html',
})
export class CfoPage {
  viewCtrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CfoPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
