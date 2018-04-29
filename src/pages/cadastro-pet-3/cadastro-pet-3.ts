import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPet_4Page } from '../cadastro-pet-4/cadastro-pet-4';
import { CadastroPet_2Page } from '../cadastro-pet-2/cadastro-pet-2';

@IonicPage()
@Component({
  selector: 'page-cadastro-pet-3',
  templateUrl: 'cadastro-pet-3.html',
})
export class CadastroPet_3Page {
  racas: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.racas = [{
      codigo: '01',
      nome: 'Border Collie'
    }, {
      codigo: '02',
      nome: 'Chiu au Á'
    }
    ];
  }

  getItems(ev: any) {
    this.initializeItems();

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.racas = this.racas.filter((item) => {
        return (item['nome'].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  clicou(texto) {
    console.log(texto);
  }
  onCancel(ev: any) {
    console.log("cancelado");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPet_3Page');
  }
  public proximo() {
    this.navCtrl.push(CadastroPet_4Page);
  }
  public anterior() {
    this.navCtrl.push(CadastroPet_2Page);
  }

}
