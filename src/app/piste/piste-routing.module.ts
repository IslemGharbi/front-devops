import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPisteComponent } from './list-piste/list-piste.component';

const routes: Routes = [
  {
    path: '',
    component: ListPisteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PisteRoutingModule { }
