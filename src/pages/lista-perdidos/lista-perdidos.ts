import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastropetProvider } from '../../providers/cadastropet/cadastropet-provider';
import { AngularFireDatabase } from 'angularfire2/database';
import { Pet } from '../../model/pet';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

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
    public cadastroProvider:CadastropetProvider) {
    
    this.cadastroProvider.getAll().then(data=>{
      this.pets = data;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPerdidosPage');
  }

}
