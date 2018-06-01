import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPet_5Page } from '../cadastro-pet-5/cadastro-pet-5';
import { CadastroPet_3Page } from '../cadastro-pet-3/cadastro-pet-3';
import { Geolocation } from '@ionic-native/geolocation'
import { UtilProvider } from '../../providers/util/util';
import { Pet } from '../../model/pet';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';


declare var google: any;
@IonicPage()
@Component({
  selector: 'page-cadastro-pet-4',
  templateUrl: 'cadastro-pet-4.html',
})
export class CadastroPet_4Page {
  lat: any;
  lgt: any;
  public endereco: string = '';
  public pet: Pet;
  public acao: any;
  @ViewChild('map') mapRef: ElementRef;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geo: Geolocation,
    public util: UtilProvider,
    private launchNavigator: LaunchNavigator
  ) {

  }
  showMap() {
    const location = new google.maps.LatLng(this.lat, this.lgt);
    const options = {
      center: location,
      zoom: 20,
      streetViewControl: false,
    }
    const map = new google.maps.Map(this.mapRef.nativeElement,
      options);

    this.addMarker(location, map);
    this.getEndereco();
  }
  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    })
  }
  getEndereco() {
    let endereco = {
      'lat': this.lat,
      'lgt': this.lgt
    }
    this.util.getEnderecoLatLong(endereco)
      .then((data: any) => {
        this.endereco = data.results[0].formatted_address;
        this.pet.nomeLocal = this.endereco;
      })
      .catch(error => {
        console.log(error);
      })
  }
  acaoMostrarPet() {
    if (this.acao == "mostrarLocalPet") {
      return true;
    } else {
      return false;
    }
  }
  chamarNavegador() {

    this.launchNavigator.navigate([this.pet.ultimoLocalVisto.lat, this.pet.ultimoLocalVisto.lgt])
  }
  ionViewDidLoad() {

    this.pet = this.navParams.get('pet');
    this.acao = this.navParams.get('acao');
    if (this.acaoMostrarPet()) {
      this.lat = this.pet.ultimoLocalVisto.lat;
      this.lgt = this.pet.ultimoLocalVisto.lgt;

      this.showMap();
    } else {
      this.geo.getCurrentPosition().then(pos => {

        this.lat = pos.coords.latitude;
        this.lgt = pos.coords.longitude;

        this.showMap();
      })
    }

  }
  public proximo() {
    this.pet.ultimoLocalVisto = { 'lat': this.lat, 'lgt': this.lgt };
    this.navCtrl.push(CadastroPet_5Page, {
      'acao': this.acao,
      'pet': this.pet,
    });
  }
  public anterior() {
    this.navCtrl.push(CadastroPet_3Page, {
      'acao': this.acao,
      'pet': this.pet,
    });
  }
}
