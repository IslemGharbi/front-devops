import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSkierComponent } from './list-skier/list-skier.component';

const routes: Routes = [

  {
    path: '',
    component: ListSkierComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkierRoutingModule { }
