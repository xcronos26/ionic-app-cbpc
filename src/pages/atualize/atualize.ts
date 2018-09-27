import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

import { InfoIgrejaPage } from '../info-igreja/info-igreja';

@IonicPage()
@Component({
  selector: 'page-atualize',
  templateUrl: 'atualize.html',
})
export class AtualizePage {
  

  igrejas:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public servidor:ServidorProvider) {
      
      this.getRetornar();

  } 

  getRetornar(){

    this.servidor.getPegar()
    .subscribe(
       data => this.igrejas = data,
       err => console.log(err)
     );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtualizePage');
  }
    

  AbreInfo(item:any){

    this.navCtrl.push(InfoIgrejaPage,{
      info:item
    });

  }
}

