import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfiguracoesProvider } from '../configuracoes/configuracoes';

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilProvider {

  constructor(
    public http: HttpClient,
    public config: ConfiguracoesProvider
  ) {
    console.log('Hello UtilProvider Provider');
  }

  getEnderecoLatLong(lat, long) {
    let url = this.config.ENDERECO_MAPS + '?latlng=' + lat + ',' + long + '&key=' + this.config.APIMAPSKEY
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
