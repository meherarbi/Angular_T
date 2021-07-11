import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ItemComponent } from './item/item.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { FormsModule } from '@angular/forms';
import { DirectiveDirective } from './directive.directive';
import { NoImagePipe } from './no-image.pipe';
import { RecruterComponent } from './recruter/recruter.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListComponent,
    DetailComponent,
    ItemComponent,
    NgstyleComponent,
    DirectiveDirective,
    NoImagePipe,
    RecruterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
