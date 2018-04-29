import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CadastropetProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastropetProvider {

  public nome: string = "";
  public foto: any;
  public especie: any;
  public cor1: any;
  public cor2: any;
  public porte: any;
  public idade: any;
  public descrição: any;
  public ultimoLocalVisto: any;

  constructor(public http: HttpClient) { }

  zerar() {
    this.nome = "";
    this.foto = "";
    this.especie = "";
    this.cor1 = "";
    this.cor2 = "";
    this.porte = "";
    this.idade = "";
    this.descrição = "";
    this.ultimoLocalVisto = "";
  }

}
