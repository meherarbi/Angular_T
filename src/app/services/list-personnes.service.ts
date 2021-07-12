import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class ListPersonnesService {

  listPersonne : Personne[]=[
    new Personne("1","Meher","Arbi","gerant",30,"meher.jpg"),
    new Personne("2","Bart","Simpson","fils",15,"bart.jpeg"),
    new Personne("3","Homer","Simpson","Pere",35,"homer.jpg"),
    new Personne("4","Fehem","fahmoun","Pere",100,"avatar.jpg")
  ]
  constructor() { }
  findpersonbyid(id:any){
    return this.listPersonne.find((p)=>p.id === id)
  }
}
