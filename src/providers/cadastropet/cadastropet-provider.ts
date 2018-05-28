import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../auth/user';

@Injectable()
export class CadastropetProvider {

  public nome: any;
  public genero: any;
  public foto: any;
  public especie: any;
  public cor1: any;
  public cor2: any;
  public porte: any;
  public idade: any;
  public descrição: any;
  public raca: any;
  public ultimoLocalVisto: any;
  private PATH = 'perdidos/';

  constructor(
    private db: AngularFireDatabase,
    public http: HttpClient,
  public userProvider:User) { }

  zerar() {
    this.nome = "";
    this.foto = "";
    this.especie = "";
    this.cor1 = "";
    this.cor2 = "";
    this.porte = "";
    this.idade = "";
    this.descrição = "";
    this.raca = "";
    this.ultimoLocalVisto = "";
  }

  getAll() {
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          data: c.payload.val()
        }))
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key)
      .snapshotChanges()
      .map(c => {
        return {
          key: c.key,
          data: c.payload.val()
        }
      })
  }

  save(pet: any) {

    return new Promise((resolve, reject) => {
      if (pet.key) {
        this.db.list(this.PATH)
          .update(pet.key, {
            responsavelCadastro:this.userProvider.logado,
            nome: pet.nome,
            genero: pet.genero,
            foto: pet.foto,
            especie: pet.especie,
            cor1: pet.cor1,
            cor2: pet.cor2,
            porte: pet.porte,
            idade: pet.idade,
            raca: pet.raca,
            ultimoLocalVisto: pet.ultimoLocalVisto
          })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({
            responsavelCadastro:this.userProvider.logado,
            nome: pet.nome,
            genero: pet.genero,
            foto: pet.foto,
            especie: pet.especie,
            cor1: pet.cor1,
            cor2: pet.cor2,
            porte: pet.porte,
            idade: pet.idade,
            raca: pet.raca,
            ultimoLocalVisto: pet.ultimoLocalVisto
          })
          .then(() => resolve());
      }
    })

  }

  remove(key: string) {
    this.db.list(this.PATH).remove(key);
  }

}
