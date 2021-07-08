import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listPersonne : Personne[]=[
    new Personne("1","nidhal","jlassi","gerant",35,"nidhal.jpg"),
    new Personne("2","meher","arbi","gerant",30,"bart.jpeg"),
    new Personne("3","meher","arbi","gerant",30,"homer.jpg")
  ]
 selectedPerson!: Personne;

  constructor() { }

  ngOnInit(): void {
  }
  recupcv(p: Personne){
    this.selectedPerson = p 

  }

}
