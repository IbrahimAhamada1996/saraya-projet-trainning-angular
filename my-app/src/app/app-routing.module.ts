import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehiculeComponent } from './vehicule/add-vehicule/add-vehicule.component';
import { ListVehiculeComponent } from './vehicule/list-vehicule/list-vehicule.component';
// ng generate module nommodule
const routes: Routes = [
  {path:'add',component:AddVehiculeComponent},
  {path:'list',component:ListVehiculeComponent},
  {path:'',redirectTo:'add', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
