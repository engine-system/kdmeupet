import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetProvider } from '../../providers/pet/pet-provider';
import { CadastroPet_4Page } from '../cadastro-pet-4/cadastro-pet-4';

/**
 * Generated class for the PetIndividualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pet-individual',
  templateUrl: 'pet-individual.html',
})
export class PetIndividualPage {
  public pet:any
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  public petProvider:PetProvider) {
    this.pet = this.navParams.get('pet');
    console.log(this.pet);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetIndividualPage');
  }

  mapaUltimoLocal(){
    this.navCtrl.push(CadastroPet_4Page,{
      'acao':'mostrarLocalPet',
      'pet':this.pet
    })
    console.log(this.pet.ultimoLocalVisto);
  }

}
