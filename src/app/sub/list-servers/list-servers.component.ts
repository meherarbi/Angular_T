import { Component, OnInit } from '@angular/core';
import { GereServersService } from '../gere-servers.service';

@Component({
  selector: 'app-list-servers',
  templateUrl: './list-servers.component.html',
  styleUrls: ['./list-servers.component.css']
})
export class ListServersComponent implements OnInit {
  listserveur  :any[] = []

  constructor(private servServeur:GereServersService) { }


  ngOnInit(): void {
     this.listserveur = this.servServeur.getlistserveurs()
}
}
