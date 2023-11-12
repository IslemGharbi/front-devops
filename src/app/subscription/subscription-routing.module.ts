import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSubscriptionComponent } from './list-subscription/list-subscription.component';

const routes: Routes = [

  {
    path: '',
    component: ListSubscriptionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
