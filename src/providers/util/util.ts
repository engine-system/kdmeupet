import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfiguracoesProvider } from '../configuracoes/configuracoes';
import { Toast, ToastController } from 'ionic-angular';

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilProvider {

  constructor(
    public http: HttpClient,
    public config: ConfiguracoesProvider,
    public toast: ToastController
  ) {
    console.log('Hello UtilProvider Provider');
  }

  createMessage(msg: string) {
    this.toast.create({ message: msg, duration: 3000, position: 'bottom' }).present();
  }
  
  getRacasGatos() {
    return [
      { nome: 'Não sei' }
    ]
  }

  getRacasCachorro() {
    return [
      { nome: 'Não sei' },
      { nome: 'Afghan Hound' },
      { nome: 'airedale terrier' },
      { nome: 'Airedale Terrier ' },
      { nome: 'Akita' },
      { nome: 'Akita Inu' },
      { nome: 'Alano Espanhol' },
      { nome: 'American Staffordshire Terrier' },
      { nome: 'American Staffordshire Terrier' },
      { nome: 'American Water Spaniel' },
      { nome: 'Antigo Cão de Pastor Inglês' },
      { nome: 'australian cattle dog' },
      { nome: 'Australian Cattle Dog (Boiadeiro Australiano)' },
      { nome: 'basenji' },
      { nome: 'Basset Azul da Gasconha' },
      { nome: 'Basset Fulvo da Bretanha' },
      { nome: 'Basset Hound' },
      { nome: 'Beagle' },
      { nome: 'Beagle Harrier' },
      { nome: 'Bearded Collie ' },
      { nome: 'bernese mountain dog' },
      { nome: 'bichon frisé' },
      { nome: 'Bichon Maltês' },
      { nome: 'Bloodhound' },
      { nome: 'Bobtail' },
      { nome: 'Boiadeiro de Berna' },
      { nome: 'Border Collie' },
      { nome: 'Borzoi' },
      { nome: 'Boston Terrier' },
      { nome: 'Boxer' },
      { nome: 'Braco Alemão' },
      { nome: 'Braco Francês' },
      { nome: 'Buldogue Francês' },
      { nome: 'Buldogue Inglês (Bulldog)' },
      { nome: 'Bull Terrier' },
      { nome: 'Bull Terrier Inglês' },
      { nome: 'Bulldog ' },
      { nome: 'Bulldog Americano' },
      { nome: 'Bulldog Francês' },
      { nome: 'bulldog ingles' },
      { nome: 'Bullmastiff' },
      { nome: 'Cairn Terrier' },
      { nome: 'Cane Corso' },
      { nome: 'Caniche' },
      { nome: 'Cão d’Água Espanhol' },
      { nome: 'Cão de Crista Chinês' },
      { nome: 'Cão de Montanha dos Pirinéus' },
      { nome: 'Cão Lobo Checoslovaco' },
      { nome: 'cavalier' },
      { nome: 'Cavalier King Charles ' },
      { nome: 'Spaniel' },
      { nome: 'Chihuahua' },
      { nome: 'Chow-Chow' },
      { nome: 'Cirneco do Etna' },
      { nome: 'Cocker Americano' },
      { nome: 'cocker spaniel' },
      { nome: 'Cocker Spaniel (Americano ou Inglês)' },
      { nome: 'Cocker Spaniel Americano' },
      { nome: 'Cocker Spaniel Inglês' },
      { nome: 'Collie' },
      { nome: 'Dachshund' },
      { nome: 'Dachshund (Teckel)' },
      { nome: 'Dálmata' },
      { nome: 'Doberman' },
      { nome: 'dogo argentino' },
      { nome: 'Dogue Alemão' },
      { nome: 'Dogue Argentino' },
      { nome: 'Dogue Canário' },
      { nome: 'dogue de bordeaux' },
      { nome: 'Dogue de Bordéus' },
      { nome: 'dogue-alemao' },
      { nome: 'Epagneul Bretão' },
      { nome: 'Fila Brasileiro' },
      { nome: 'Fox Paulistinha' },
      { nome: 'Fox Terrier' },
      { nome: 'Foxhound' },
      { nome: 'Galgo' },
      { nome: 'Galgo Afegão' },
      { nome: 'Golden Retriever' },
      { nome: 'Gos d Atura ' },
      { nome: 'Greyhound' },
      { nome: 'greyhound cachorro' },
      { nome: 'Griffon de Bruxelas' },
      { nome: 'Husky Siberiano' },
      { nome: 'Ibizan Hound' },
      { nome: 'Jack Russel Terrier' },
      { nome: 'kuvasz' },
      { nome: 'labrador' },
      { nome: 'Labrador Retriever' },
      { nome: 'Laika ' },
      { nome: 'leao da rodesia' },
      { nome: 'Leão da Rodésia – Rhodesian ' },
      { nome: 'Lhasa Apso' },
      { nome: 'Lulu da Pomerânia (Spitz Alemão Anão)' },
      { nome: 'Malamute-do-Alasca' },
      { nome: 'Maltês' },
      { nome: 'maremano abruzes' },
      { nome: 'Mastiff' },
      { nome: 'Mastim dos Pirenéus' },
      { nome: 'Mastim Espanhol' },
      { nome: 'Mastim Napolitano' },
      { nome: 'Mastin do Tibete' },
      { nome: 'Mastin dos Pirenéus' },
      { nome: 'Mastin Espanhol' },
      { nome: 'Mastín Napolitano' },
      { nome: 'Norfolk Terrier' },
      { nome: 'Old English Sheepdog' },
      { nome: 'Papillon' },
      { nome: 'Pastor Alemão' },
      { nome: 'Pastor Alemão (Capa Preta)' },
      { nome: 'pastor alemão capa preta' },
      { nome: 'pastor australiano' },
      { nome: 'Pastor Belga ' },
      { nome: 'Pastor Branco Suíço (Pastor Canadense)' },
      { nome: 'Pastor de Beauce' },
      { nome: 'Pastor de Brie' },
      { nome: 'pastor de shetland' },
      { nome: 'Pastor dos Pirenéus de Cara Rosa' },
      { nome: 'Pastor Maremano Abruzês' },
      { nome: 'pembroke' },
      { nome: 'Pequeno Basset Griffon' },
      { nome: 'Pequeno Brabançon' },
      { nome: 'Pequeno Cão Leão' },
      { nome: 'Pequinês' },
      { nome: 'Perdigueiro' },
      { nome: 'Perdigueiro Português' },
      { nome: 'pinscher' },
      { nome: 'Pinscher Anão' },
      { nome: 'pit bull' },
      { nome: 'Pit Bull (American Pit Bull Terrier)' },
      { nome: 'Podengo' },
      { nome: 'Podengos  Grandes Lisos ' },
      { nome: 'Podengos  Médios Cerdosos' },
      { nome: 'Podengos  Médios Lisos' },
      { nome: 'Podengos  Pequenos Cerdosos' },
      { nome: 'Podengos  Pequenos Lisos' },
      { nome: 'Podengos Grandes Cerdosos' },
      { nome: 'pointer' },
      { nome: 'Pointer Inglês' },
      { nome: 'poodle' },
      { nome: 'Poodle (gigante, médio, anão e toy)' },
      { nome: 'Pug' },
      { nome: 'Rhodesian Ridgeback' },
      { nome: 'Rottweiler' },
      { nome: 'Rough Collie' },
      { nome: 'Sabueso (Espanhol ou Italiano)' },
      { nome: 'Saluki' },
      { nome: 'Samoiedo' },
      { nome: 'São Bernardo' },
      { nome: 'Schnauzer' },
      { nome: 'Schnauzer Miniatura' },
      { nome: 'Scottish Terrier ' },
      { nome: 'Setter Inglês' },
      { nome: 'Setter Irlandês' },
      { nome: 'Shar Pei' },
      { nome: 'sheepdog' },
      { nome: 'shiba inu' },
      { nome: 'Shih Tzu' },
      { nome: 'Smooth Collie' },
      { nome: 'Spaniel Japonês' },
      { nome: 'Spitz Alemão' },
      { nome: 'Spitz Japonês' },
      { nome: 'Staffordshire Bull Terrier' },
      { nome: 'Teckel' },
      { nome: 'Terra-nova' },
      { nome: 'Terrier Australiano' },
      { nome: 'Terrier Brasileiro' },
      { nome: 'Terrier Escocês ' },
      { nome: 'Terrier Irlandês ' },
      { nome: 'Terrier Japonês' },
      { nome: 'Terrier Negro Russo' },
      { nome: 'Terrier Norfolk' },
      { nome: 'Terrier Norwich' },
      { nome: 'Terrier Tibetano' },
      { nome: 'Vizsla' },
      { nome: 'Waimaraner' },
      { nome: 'Welhs Terrier' },
      { nome: 'Welsh Corgi Cardigan' },
      { nome: 'Welsh Corgi Pembroke' },
      { nome: 'West Highland T.' },
      { nome: 'West Highland White Terrier' },
      { nome: 'whippet' },
      { nome: 'Wolfspitz' },
      { nome: 'yorkshire' },
      { nome: 'Yorkshire Terrier' }
    ];
  }
  
  getEnderecoLatLong(endereco) {
    let url = this.config.ENDERECO_MAPS + '?latlng=' + endereco.lat + ',' + endereco.lgt + '&key=' + this.config.APIMAPSKEY
    console.log(url);
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result);
        },
          (error) => {
            console.log(error);
          })
    })
  }

}
