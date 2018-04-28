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
  public especies;
  public cadastro1:any;
  public cadastro2:any;
  public nome;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.cadastro1 = navParams.get('cadastro1');
    console.log(this.cadastro1)
    this.especies = [
      {
        codigo:'01',
        nome:'Cachorro'
      },
      {
        codigo:'02',
        nome:'Gato'
      }
    ]
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
    this.cadastro2 = this.nome;
    this.navCtrl.push(CadastroPet_3Page,
    {
      cadastro1:this.cadastro1,
      cadastro2:this.cadastro2
    });
  }

  public anterior(){
    this.navCtrl.push(CadastroPetPage);
  }

}
