import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pet = this.navParams.get('pet');
    console.log(this.pet);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetIndividualPage');
  }

}
