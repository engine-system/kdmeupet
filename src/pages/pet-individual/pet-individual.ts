import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetProvider } from '../../providers/pet/pet-provider';
import { CadastroPet_4Page } from '../cadastro-pet-4/cadastro-pet-4';
import { User } from '../../providers/auth/user';


@Component({
  selector: 'page-pet-individual',
  templateUrl: 'pet-individual.html',
})
export class PetIndividualPage {
  public pet:any;
  public userProvider:User;
  public mensagens:any=new Array();
  public mensagem:string;
  public contadorMensagens:number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  public petProvider:PetProvider) {
    this.pet = this.navParams.get('pet');
    console.log(this.pet);
  }

  ionViewDidLoad() {
    this.carregaMensagens();
    console.log('ionViewDidLoad PetIndividualPage');
    }
  carregaMensagens(){
    
    this.petProvider.getAllMensagens(this.pet.key).then(data => {
      this.mensagens = data;
      console.log(this.mensagens);
      this.contadorMensagens = this.mensagens.length;
    })
  }
  mapaUltimoLocal(){
    this.navCtrl.push(CadastroPet_4Page,{
      'acao':'mostrarLocalPet',
      'pet':this.pet
    })
    console.log(this.pet.ultimoLocalVisto);
  }

  saveMensagem(){
    if(this.mensagem!=""){
      this.petProvider.mensagemPet(this.pet.key,this.mensagem);
      this.carregaMensagens();
      this.mensagem = "";
    }
  }

}
