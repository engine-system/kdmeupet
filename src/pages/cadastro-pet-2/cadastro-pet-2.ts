import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPet_3Page } from '../cadastro-pet-3/cadastro-pet-3';
import { CadastroPetPage } from '../cadastro-pet/cadastro-pet';
import { CadastropetProvider } from '../../providers/cadastropet/cadastropet-provider';

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
  public generos;
  public cadastro1: any;
  public cadastro2: any;
  public nome;
  public genero;
  public especie;
  public corPrimaria;
  public corSecundaria;
  public porte;
  public idade;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cadastro: CadastropetProvider) {

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
    console.log('ionViewDidLoad CadastroPet_2Page');
  }

  public proximo() {
    this.cadastro.nome = this.nome;
    this.cadastro.genero = this.genero;
    this.cadastro.especie = this.especie;
    this.cadastro.cor1 = this.corPrimaria;
    this.cadastro.cor2 = this.corSecundaria;
    this.cadastro.porte = this.porte;
    this.cadastro.idade = this.idade;
    this.navCtrl.push(CadastroPet_3Page);
  }

  public anterior() {
    this.navCtrl.push(CadastroPetPage);
  }

}
