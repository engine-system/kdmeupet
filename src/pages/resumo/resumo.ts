import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResumoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resumo',
  templateUrl: 'resumo.html',
})
export class ResumoPage {

  public cadastrados:number;
  public perdidos:number;
  public mensagens:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cadastrados = 50;
    this.perdidos = 23;
    this.mensagens = 56;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumoPage');
  }

}
