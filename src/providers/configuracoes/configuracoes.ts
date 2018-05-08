import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfiguracoesProvider {

  public VERSION_APP:string = '0.2';
  constructor(public http: HttpClient) {
    console.log('Hello ConfiguracoesProvider Provider');
  }

}
