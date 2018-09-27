import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

@IonicPage()
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {
  NomeUsr:string;
  contatos:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public servidor:ServidorProvider
    ) {
    this.getRetornar();
    this.NomeUsr = this.navParams.get('name');
  console.log(name);

  }
  getRetornar(){

    this.servidor.getPegar()
    .subscribe(
       data => this.contatos = data,
       err => console.log(err)
     );

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiaPage');
  }

}
