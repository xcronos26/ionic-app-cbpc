import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CfoPage } from '../cfo/cfo';
import { CapelaniaPage } from '../capelania/capelania';
import { InglesPage } from '../ingles/ingles';
import { VocatioIgrejaPage } from '../vocatio-igreja/vocatio-igreja';
/**
 * Generated class for the VocatioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vocatio',
  templateUrl: 'vocatio.html',
})
export class VocatioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocatioPage');
  }


  goToCfo() {
    const modal = this.modalCtrl.create(CfoPage);
    modal.present();
  }

  goToCapelania() {
    const modal = this.modalCtrl.create(CapelaniaPage);
    modal.present();

  }
  
  goToIngles() {
    const modal = this.modalCtrl.create(InglesPage);
    modal.present();

  }
  
  goToVocIgreja() {
    const modal = this.modalCtrl.create(VocatioIgrejaPage);
    modal.present();

  }
  
}
