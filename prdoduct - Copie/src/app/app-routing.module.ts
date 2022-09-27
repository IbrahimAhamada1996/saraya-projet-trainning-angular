import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentListComponent } from './student/student-list/student-list.component';
// ng generate module nommodule
const routes: Routes = [
  {path:'add',component:StudentAddComponent},
  {path:'list',component:StudentListComponent},
  {path:'',redirectTo:'add', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
