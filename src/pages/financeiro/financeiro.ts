import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { ComprovantePPage } from '../comprovante-p/comprovante-p';
/**
 * Generated class for the FinanceiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-financeiro',
  templateUrl: 'financeiro.html',
})
export class FinanceiroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }


  EnviarComprovante(){

    this.navCtrl.push(ComprovantePPage)

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FinanceiroPage');
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      
      buttons: [
        {
          text: 'Plano cooperativo',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Enviar Comprovante',
          handler: () => {
            this.EnviarComprovante();
            console.log('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
