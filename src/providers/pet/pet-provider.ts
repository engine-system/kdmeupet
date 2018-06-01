import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../auth/user';
import { Pet } from '../../model/pet';

@Injectable()
export class PetProvider {
  public pet: Pet;
  private PATHPERDIDOS = 'perdidos/';
  private PATHPACHADOS = 'achados/';
  private PATHMENSAGEM = 'mensagens/';

  constructor(
    private db: AngularFireDatabase,
    public http: HttpClient,
    public userProvider: User) { }

  getAllPerdidos(): Promise<any> {
    let pro = new Promise((resolv, reject) => {
      this.db.list(this.PATHPERDIDOS).valueChanges().subscribe(data => {
        resolv(data);
      },
        err => {
          console.log(err);
          reject(err);
        })
    })
    return pro;
  }

  getPerdido(key: string) {
    return this.db.object(this.PATHPERDIDOS + key)
  }
  colocaKeyPerdido(key:any){
    return new Promise((resolve, reject) => {
      this.db.list(this.PATHPERDIDOS)
        .update(key, {
          key:key
        })
        .then(() => resolve())
        .catch((e) => reject(e));
    })
  }
  updatePerdido(pet: any) {
    return new Promise((resolve, reject) => {
      this.db.list(this.PATHPERDIDOS)
        .update(pet.key, {
          responsavelCadastro: this.userProvider.logado,
          nome: pet.nome,
          genero: pet.genero,
          foto: pet.foto,
          especie: pet.especie,
          cor1: pet.corPrimaria,
          cor2: pet.corSecundaria,
          porte: pet.porte,
          idade: pet.idade,
          raca: pet.raca,
          descricao: pet.descricao,
          ultimoLocalVisto: pet.ultimoLocalVisto
        })
        .then(() => resolve())
        .catch((e) => reject(e));
    })

  }
  savePerdido(pet: any) {

    return new Promise((resolve, reject) => {
      this.db.list(this.PATHPERDIDOS)
        .push({
          responsavelCadastro: this.userProvider.logado,
          nome: pet.nome,
          genero: pet.genero,
          foto: pet.foto,
          especie: pet.especie,
          cor1: pet.corPrimaria,
          cor2: pet.corSecundaria,
          porte: pet.porte,
          idade: pet.idade,
          raca: pet.raca,
          descricao: pet.descricao,
          ultimoLocalVisto: pet.ultimoLocalVisto
        })
        .then((data) => {
          let key = data.key;
          this.colocaKeyPerdido(key)
            .then(() => {
              console.log("key inserida");
            })
            .catch((e) => {
            });
          resolve()
        });
    })

  }

  removePerdido(key: string) {
    this.db.list(this.PATHPERDIDOS).remove(key);
  }
  getAllAchados(): Promise<any> {
    let pro = new Promise((resolv, reject) => {
      this.db.list(this.PATHPACHADOS).valueChanges().subscribe(data => {
        resolv(data);
      },
        err => {
          console.log(err);
          reject(err);
        })
    })
    return pro;
  }

  updateAchado(pet: any) {
    return new Promise((resolve, reject) => {
      this.db.list(this.PATHPACHADOS)
        .update(pet.key, {
          responsavelCadastro: this.userProvider.logado,
          nome: pet.nome,
          genero: pet.genero,
          foto: pet.foto,
          especie: pet.especie,
          cor1: pet.cor1,
          cor2: pet.cor2,
          porte: pet.porte,
          idade: pet.idade,
          raca: pet.raca,
          descricao: pet.descricao,
          ultimoLocalVisto: pet.ultimoLocalVisto
        })
        .then(() => resolve())
        .catch((e) => reject(e));
    })
  }

  saveAchado(pet: any) {
    return new Promise((resolve, reject) => {
      this.db.list(this.PATHPACHADOS)
        .push({
          responsavelCadastro: this.userProvider.logado,
          nome: pet.nome,
          genero: pet.genero,
          foto: pet.foto,
          especie: pet.especie,
          cor1: pet.cor1,
          cor2: pet.cor2,
          porte: pet.porte,
          idade: pet.idade,
          raca: pet.raca,
          descricao: pet.descricao,
          ultimoLocalVisto: pet.ultimoLocalVisto
        })
        .then((data) => {
          resolve()
        });
    })
  }

  getAchado(key: string) {
    return this.db.object(this.PATHPACHADOS + key)
  }

  removeAchado(key: string) {
    this.db.list(this.PATHPACHADOS).remove(key);
  }

}
