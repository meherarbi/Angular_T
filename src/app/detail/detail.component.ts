import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 @Input()
  selectedpersonne!: Personne;
  constructor(private addrec:ListRecruesService) { }

  ngOnInit(): void {
  }
  addrecrue(){
    this.addrec.addrecru(this.selectedpersonne)
  }

}
