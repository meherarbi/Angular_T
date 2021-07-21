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
  getlistpersonne(){
    return this.listPersonne
  }

  addPersonne(p: Personne){
    p.id=this.listPersonne[this.listPersonne.length-1].id+1
    this.listPersonne.push(p)
  }

  findpersonbyid(id:any){
    return this.listPersonne.find((p)=>p.id === id)
  }

  DeletePersonne(id: Personne){
    let i = this.listPersonne.indexOf(id)
    this.listPersonne.splice(i,1)
  }

  UpdatePersonne(p: Personne){
    let i = this.listPersonne.indexOf(p)
    this.listPersonne[i]=p
  }
}
