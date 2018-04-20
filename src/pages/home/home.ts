import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public cadastrados:number;
  public perdidos:number;
  public mensagens:number;

  constructor(public navCtrl: NavController) {
    this.cadastrados = 50;
    this.perdidos = 23;
    this.mensagens = 56;
  }

}
