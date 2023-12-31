import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRegistrationComponent } from './list-registration/list-registration.component';

const routes: Routes = [
  {
    path: '',
    component: ListRegistrationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
