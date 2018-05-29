import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Pet } from '../../model/pet';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { PetProvider } from '../../providers/pet/pet-provider';

@IonicPage()
@Component({
  selector: 'page-lista-encontrados',
  templateUrl: 'lista-encontrados.html',
})
export class ListaEncontradosPage {

  public pets;

  constructor(public navCtrl: NavController,
    public afDB:AngularFireDatabase,
    public navParams: NavParams,
    public petProvider:PetProvider) {
    
    this.petProvider.getAllAchados().then(data=>{
      this.pets = data;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPerdidosPage');
  }

}
