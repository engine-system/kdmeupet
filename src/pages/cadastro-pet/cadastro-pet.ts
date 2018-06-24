import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CadastroPet_2Page } from '../cadastro-pet-2/cadastro-pet-2';
import { TabsPage } from '../tabs/tabs';
import { PetProvider } from '../../providers/pet/pet-provider';
import { Pet } from '../../model/pet';
import { UtilProvider } from '../../providers/util/util';

@Component({
  selector: 'page-cadastro-pet',
  templateUrl: 'cadastro-pet.html',
})
export class CadastroPetPage {
  public pet:Pet = new Pet();
  public acao:any;
  constructor(
    private camera: Camera,
    public navCtrl: NavController,
    public navParams: NavParams,
    public petProvider: PetProvider,
    public util:UtilProvider
  ) {
    this.acao = this.navParams.get('acao');
    this.pet = this.navParams.get('pet');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPetPage');
  }

  public acaoFotografia(){
    if(this.acao=='achado'){
      this.tirarFoto();
    }else{
      this.getFoto();
    }
  }

  

  public getFoto() {
    const options: CameraOptions = {
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.pet.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  public tirarFoto(){
    const options: CameraOptions = {
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.pet.foto = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

  public proximo() {
    if(this.pet.foto){
      this.navCtrl.push(CadastroPet_2Page, {
        'acao':this.acao,
        'pet': this.pet
      });
    }else{
      this.util.createMessage("Favor inserir uma foto");
    }
    
  }
  public cancelar() {
    this.navCtrl.push(TabsPage)
  }
}
