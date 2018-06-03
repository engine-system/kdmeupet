import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mensagens',
  templateUrl: 'mensagens.html',
})
export class MensagensPage {
  public mensagens:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.mensagens=new Array();

    this.mensagens.push({});
    this.mensagens.push({});
    this.mensagens.push({});
    this.mensagens.push({});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensagensPage');
  }

}
