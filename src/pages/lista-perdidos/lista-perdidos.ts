import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Pet } from '../../model/pet';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { PetProvider } from '../../providers/pet/pet-provider';

/**
 * Generated class for the ListaPerdidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-perdidos',
  templateUrl: 'lista-perdidos.html',
})
export class ListaPerdidosPage {

  public pets;

  constructor(public navCtrl: NavController,
    public afDB:AngularFireDatabase,
    public navParams: NavParams,
    public petProvider:PetProvider) {
    
    this.petProvider.getAllPerdidos().then(data=>{
      this.pets = data;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPerdidosPage');
  }

}
