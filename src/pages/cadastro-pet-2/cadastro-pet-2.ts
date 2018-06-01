import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPet_3Page } from '../cadastro-pet-3/cadastro-pet-3';
import { CadastroPetPage } from '../cadastro-pet/cadastro-pet';
import { PetProvider } from '../../providers/pet/pet-provider';
import { Pet } from '../../model/pet';

@IonicPage()
@Component({
  selector: 'page-cadastro-pet-2',
  templateUrl: 'cadastro-pet-2.html',
})
export class CadastroPet_2Page {
  public cores;
  public portes;
  public idades;
  public especies;
  public generos;

  public pet: Pet=new Pet();
  public acao:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public petProvider: PetProvider) {

    this.generos = [
      {
        codigo: '01',
        nome: 'Masculino'
      },
      {
        codigo: '02',
        nome: 'Feminino'
      }
    ]
    this.especies = [
      {
        codigo: '01',
        nome: 'Cachorro'
      },
      {
        codigo: '02',
        nome: 'Gato'
      }
    ]
    this.cores = [
      {
        codigo: '01',
        nome: 'Preto'
      },
      {
        codigo: '02',
        nome: 'Bege'
      },
      {
        codigo: '03',
        nome: 'Amarelo'
      },
      {
        codigo: '04',
        nome: 'Marrom'
      },
      {
        codigo: '05',
        nome: 'Cinza'
      },
      {
        codigo: '06',
        nome: 'Branco'
      }
    ];
    this.portes = [
      {
        codigo: '01',
        nome: 'Pequeno'
      },
      {
        codigo: '02',
        nome: 'Médio'
      }
      ,
      {
        codigo: '03',
        nome: 'Grande'
      }
    ];
    this.idades = [
      {
        codigo: '01',
        nome: 'Filhote'
      },
      {
        codigo: '02',
        nome: 'Adulto'
      }
      ,
      {
        codigo: '03',
        nome: 'Idoso'
      }
    ];
  }

  ionViewDidLoad() {
    this.pet = this.navParams.get('pet');
    this.acao = this.navParams.get('acao');
    console.log('ionViewDidLoad CadastroPet_2Page');
  }

  public proximo() {
    this.navCtrl.push(CadastroPet_3Page, {
      'acao': this.acao,
      'pet': this.pet,
    });
  }

  public anterior() {
    this.navCtrl.push(CadastroPetPage, {
      'acao': this.acao,
      'pet': this.pet,
    });
  }

}
