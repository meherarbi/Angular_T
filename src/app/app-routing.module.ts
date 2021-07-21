import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CvComponent } from './cv/cv.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { SUB_ROUTING } from './sub/sub-routing.module';


const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'login',component:LoginComponent},
 {path:'cv/add',component:AddComponent},

 {path:'cv',component:CvComponent},
 {path:'word',component:NgstyleComponent},
 {path:'cv/:id',component:InfoComponent},
 {path:'cv/edit/:id',component:EditComponent},
 {path:'serveur',loadChildren: ()=> import('../app/sub/sub.module').then(m => m.SubModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
