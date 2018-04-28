import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPet_4Page } from '../cadastro-pet-4/cadastro-pet-4';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the CadastroPet_5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-pet-5',
  templateUrl: 'cadastro-pet-5.html',
})
export class CadastroPet_5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPet_5Page');
  }

  public anterior() {
    this.navCtrl.push(CadastroPet_4Page);
  }
  public concluir() {
    console.log("concluir cadastro");
    this.navCtrl.push(TabsPage);
  }
}
