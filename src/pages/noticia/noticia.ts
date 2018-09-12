import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {
  NomeUsr:string;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.NomeUsr = this.navParams.get('name');
  console.log(name);

  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiaPage');
  }

}
