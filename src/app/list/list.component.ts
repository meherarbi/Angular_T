import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  tabpersonne!: Personne[];
  @Output() sendcv = new EventEmitter<Personne>()
  constructor() {}


  ngOnInit(): void {
  }

  listcv(p: Personne){

    this.sendcv.emit(p);

  }

}
