import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Personne } from '../models/personne';
import { ListPersonnesService } from '../services/list-personnes.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  listperson: Personne | any;

  constructor(private activatedrouter:ActivatedRoute,private persServ:ListPersonnesService, private router: Router
    ) { }

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

  updatePerson(){
    this.persServ.UpdatePersonne(this.listperson)
    this.router.navigateByUrl('cv')

  }

}
