import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 @Input()
  selectedpersonne!: Personne;
  constructor() { }

  ngOnInit(): void {
  }

}