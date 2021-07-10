import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../models/personne';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listPersonne : Personne[]=[
    new Personne("1","Meher","Arbi","gerant",30,"meher.jpg"),
    new Personne("2","Bart","Simpson","fils",15,"bart.jpeg"),
    new Personne("3","Homer","Simpson","Pere",35,"homer.jpg"),
    new Personne("4","Fehem","fahmoun","Pere",100)
  ]
 selectedPerson!: Personne;

  constructor(private service: FirstService) { }

  ngOnInit(): void {
  }
  recupcv(p: Personne){
    this.selectedPerson = p 

  }
 

}
