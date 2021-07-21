import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../models/personne';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: Router,private persServ:ListPersonnesService) { }

  ngOnInit(): void {
  }
  ADDCV(p: Personne){
    this.persServ.addPersonne(p)
    this.router.navigateByUrl('cv')

  }
}
