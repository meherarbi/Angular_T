import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailServersComponent } from "./detail-servers/detail-servers.component";
import { EditServersComponent } from "./edit-servers/edit-servers.component";
import { ListServersComponent } from "./list-servers/list-servers.component";

const myroutes : Routes = [
  {
    path:'serveur',component:ListServersComponent,children:[
      {path:'id',component:DetailServersComponent},
      {path:'edit/:id',component:EditServersComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(myroutes)],
  exports:[RouterModule]
})


export class SUB_ROUTING {
}
