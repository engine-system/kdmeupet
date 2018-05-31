import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Pet } from '../../../model/pet';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { PetProvider } from '../../../providers/pet/pet-provider';
import { UtilProvider } from '../../../providers/util/util';
import { PetIndividualPage } from '../../pet-individual/pet-individual';

@IonicPage()
@Component({
  selector: 'page-lista-encontrados',
  templateUrl: 'lista-encontrados.html',
})
export class ListaEncontradosPage {

  public pets;

  constructor(public navCtrl: NavController,
    public afDB: AngularFireDatabase,
    public navParams: NavParams,
    public petProvider: PetProvider,
    public util: UtilProvider) {

    this.petProvider.getAllAchados().then(data => {
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
