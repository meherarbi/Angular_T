import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';


const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'cv',component:CvComponent},
 {path:'word',component:NgstyleComponent},
 {path:'cv/:id',component:InfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
