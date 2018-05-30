import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Pet } from '../../../model/pet';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { PetProvider } from '../../../providers/pet/pet-provider';
import { UtilProvider } from '../../../providers/util/util';
import { PetIndividualPage } from '../../pet-individual/pet-individual';

/**
 * Generated class for the ListaPerdidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-perdidos',
  templateUrl: 'lista-perdidos.html'
})
export class ListaPerdidosPage {

  public pets;

  constructor(public navCtrl: NavController,
    public afDB: AngularFireDatabase,
    public navParams: NavParams,
    public petProvider: PetProvider,
    public util: UtilProvider) {

    this.petProvider.getAllPerdidos().then(data => {
      this.pets = data;
      this.pets.forEach(pet => {
        this.ultimoLocal(pet);
      });
    })

  }

  irPet(pet) {
    this.navCtrl.push(PetIndividualPage,{
      'pet':pet
    })
  }

  ultimoLocal(pet) {

    this.util.getEnderecoLatLong(pet.ultimoLocalVisto)
      .then((data: any) => {
        let listaEnderecos = data.results;
        let enderecoPreenchido = false;
        listaEnderecos.forEach(tipoEndereco => {
          if (tipoEndereco.geometry.location_type == 'APPROXIMATE' && !enderecoPreenchido) {
            let endereco = tipoEndereco.formatted_address;
            pet['nomeLocal'] = endereco;
            enderecoPreenchido = true;
          }
        });

      })
      .catch(error => {
        console.log(error);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPerdidosPage');
  }

}
