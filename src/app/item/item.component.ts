import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  onePerson!: Personne;

  @Output() sendmsg = new EventEmitter<Personne>()

  constructor() {}

  ngOnInit(): void {
  }

  sendperstolist(){
    this.sendmsg.emit(this.onePerson)
  }

}
