import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class User{
    logado:string="";
    email:string="";
    password:string="";
    nome:string="";
}