import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPet_4Page } from '../cadastro-pet-4/cadastro-pet-4';
import { CadastroPet_2Page } from '../cadastro-pet-2/cadastro-pet-2';

/**
 * Generated class for the CadastroPet_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-pet-3',
  templateUrl: 'cadastro-pet-3.html',
})
export class CadastroPet_3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPet_3Page');
  }
  public proximo(){
    this.navCtrl.push(CadastroPet_4Page);
  }
  public anterior(){
    this.navCtrl.push(CadastroPet_2Page);
  }

}
