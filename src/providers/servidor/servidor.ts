import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


/*
  Generated class for the ServidorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServidorProvider {
  url:string= "http://cbpc.org.br";
  

  constructor(public http: Http) {
    console.log('Hello ServidorProvider Provider');
  }

  getPegar(){
    return this.http.get(this.url+'/phpp/buscarIg.php').pipe(map(res => res.json()));
  }
  getPegarN(){
    return this.http.get(this.url+'/wp-json/wp/v2/posts?_embed').pipe(map(res => res.json()));
  }
}
