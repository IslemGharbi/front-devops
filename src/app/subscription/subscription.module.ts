import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { ListSubscriptionComponent } from './list-subscription/list-subscription.component';
import { DemoMaterialModule } from '../demo-material-module';


@NgModule({
  declarations: [
    ListSubscriptionComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    DemoMaterialModule
  ]
})
export class SubscriptionModule { }
