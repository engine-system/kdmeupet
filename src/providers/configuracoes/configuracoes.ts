import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfiguracoesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfiguracoesProvider {

  public VERSION_APP:string = '0.2';
  constructor(public http: HttpClient) {
    console.log('Hello ConfiguracoesProvider Provider');
  }

}
