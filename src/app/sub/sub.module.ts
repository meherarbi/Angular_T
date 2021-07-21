import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListServersComponent } from './list-servers/list-servers.component';
import { EditServersComponent } from './edit-servers/edit-servers.component';
import { DetailServersComponent } from './detail-servers/detail-servers.component';
import { BrowserModule } from '@angular/platform-browser';
import { SUB_ROUTING } from './sub-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListServersComponent,
    EditServersComponent,
    DetailServersComponent
  ],
  imports: [CommonModule,RouterModule,
    SUB_ROUTING
  ],



})
export class SubModule { }
