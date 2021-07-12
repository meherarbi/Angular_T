import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Personne } from '../models/personne';
import { ListPersonnesService } from '../services/list-personnes.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  listperson: Personne | any;


  constructor(private activatedrouter: ActivatedRoute ,
    private persServ:ListPersonnesService) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(
      (parm:ParamMap) => {
          this.listperson = this.persServ.findpersonbyid(parm.get('id'))
      }
    ),
    (error: any)=>{
      console.log(error)
    }
  }

}
