import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPet_3Page } from '../cadastro-pet-3/cadastro-pet-3';
import { CadastroPetPage } from '../cadastro-pet/cadastro-pet';

@IonicPage()
@Component({
  selector: 'page-cadastro-pet-2',
  templateUrl: 'cadastro-pet-2.html',
})
export class CadastroPet_2Page {
  public cores;
  public portes;
  public idades;
  public racas;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cores = [
      {
        codigo: '01',
        nome: 'Preto'
      },
      {
        codigo: '02',
        nome: 'Branco'
      }
    ];
    this.portes = [
      {
        codigo:'01',
        nome:'Pequeno'
      },
      {
        codigo:'02',
        nome:'Médio'
      }
    ];
    this.idades = [
      {
        codigo:'01',
        nome:'Filhote'
      },
      {
        codigo:'02',
        nome:'Adulto'
      }
    ];
    this.racas = [
      {
        codigo:'01',
        nome:'Vira-Lata'
      },
      {
        codigo:'02',
        nome:'Border Collie'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPet_2Page');
  }

  public proximo(){
    this.navCtrl.push(CadastroPet_3Page);
  }

  public anterior(){
    this.navCtrl.push(CadastroPetPage);
  }

}
