import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfiguracoesProvider } from '../configuracoes/configuracoes';
import { Toast, ToastController } from 'ionic-angular';

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilProvider {

  constructor(
    public http: HttpClient,
    public config: ConfiguracoesProvider,
    public toast:ToastController
  ) {
    console.log('Hello UtilProvider Provider');
  }
  createMessage(msg:string){
    this.toast.create({message:msg,duration:3000,position:'bottom'}).present();
  }
  getEnderecoLatLong(endereco) {
    let url = this.config.ENDERECO_MAPS + '?latlng=' + endereco.lat + ',' + endereco.lgt + '&key=' + this.config.APIMAPSKEY
    console.log(url);
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result);
        },
          (error) => {
            console.log(error);
          })
    })
  }

}
