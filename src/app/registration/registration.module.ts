import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { ListRegistrationComponent } from './list-registration/list-registration.component';
import { DemoMaterialModule } from '../demo-material-module';


@NgModule({
  declarations: [
    ListRegistrationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    DemoMaterialModule
  ]
})
export class RegistrationModule { }
