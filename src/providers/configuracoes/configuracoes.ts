import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfiguracoesProvider {

  public VERSION_APP:string = '0.3';
  public APIMAPSKEY:string = 'AIzaSyBEVCs0WBpzWA7Kzl8CnWtLD-pa3dmSkDk';
  public ENDERECO_MAPS = "https://maps.googleapis.com/maps/api/geocode/json"
  
  constructor(public http: HttpClient) {
    console.log('Hello ConfiguracoesProvider Provider');
  }

}
