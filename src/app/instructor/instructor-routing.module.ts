import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListInstructorComponent } from './list-instructor/list-instructor.component';

const routes: Routes = [

  {
    path: '',
    component: ListInstructorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
