import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPet_5Page } from '../cadastro-pet-5/cadastro-pet-5';
import { CadastroPet_3Page } from '../cadastro-pet-3/cadastro-pet-3';
import { Geolocation } from '@ionic-native/geolocation'
import { UtilProvider } from '../../providers/util/util';
import { CadastropetProvider } from '../../providers/cadastropet/cadastropet-provider';


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

  @ViewChild('map') mapRef: ElementRef;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geo: Geolocation,
    public util: UtilProvider,
    public cadastro:CadastropetProvider
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
    this.util.getEnderecoLatLong(this.lat, this.lgt)
      .then((data: any) => {
        this.endereco = data.results[0].formatted_address;
      })
      .catch(error => {
        console.log(error);
      })
  }

  ionViewDidLoad() {
    this.geo.getCurrentPosition().then(pos => {

      this.lat = pos.coords.latitude;
      this.lgt = pos.coords.longitude;

      console.log(this.lat + "" + this.lgt)

      this.showMap();
    })
  }
  public proximo() {
    this.cadastro.ultimoLocalVisto = {'lat':this.lat,'lgt':this.lgt};
    this.navCtrl.push(CadastroPet_5Page);
  }
  public anterior() {
    this.navCtrl.push(CadastroPet_3Page);
  }
}
