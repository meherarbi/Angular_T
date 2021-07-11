import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class ListRecruesService {
  listrecrues:Personne[]=[]

  constructor() { }

  getlistrecrues(){
    return this.listrecrues
  }

  addrecru(p: Personne){
    console.log(p)
    if(this.listrecrues.indexOf(p)===-1)
    this.listrecrues.push(p)
    else
    alert('cette personne a deja été recruter')
  }
}
