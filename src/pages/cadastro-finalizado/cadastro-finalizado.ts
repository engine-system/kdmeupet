import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-cadastro-finalizado',
  templateUrl: 'cadastro-finalizado.html',
})
export class CadastroFinalizadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroFinalizadoPage');
  }

  ok(){
    this.navCtrl.push(TabsPage)
  }

}
