import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  bgcolor: any
 color: any
 size : any
 police = ['','Impact', 'Arial','Phosphate','Times New Roman','Cambria','Kable']

  constructor() { }

  ngOnInit(): void {
  }

  changesize(inp:any){
    this.size = inp.value+ 'px';
    console.log(this.size)
  }

}
