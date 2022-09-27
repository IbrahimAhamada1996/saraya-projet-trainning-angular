import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddVehiculeComponent } from './vehicule/add-vehicule/add-vehicule.component';
import { ListVehiculeComponent } from './vehicule/list-vehicule/list-vehicule.component';






@NgModule({
  declarations: [
    AppComponent,
    AddVehiculeComponent,
    ListVehiculeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
