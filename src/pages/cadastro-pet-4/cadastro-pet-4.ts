import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPet_5Page } from '../cadastro-pet-5/cadastro-pet-5';
import { CadastroPet_3Page } from '../cadastro-pet-3/cadastro-pet-3';

/**
 * Generated class for the CadastroPet_4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-pet-4',
  templateUrl: 'cadastro-pet-4.html',
})
export class CadastroPet_4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPet_4Page');
  }
  public proximo(){
    this.navCtrl.push(CadastroPet_5Page);
  }
  public anterior(){
    this.navCtrl.push(CadastroPet_3Page);
  }
}
