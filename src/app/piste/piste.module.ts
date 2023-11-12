import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PisteRoutingModule } from './piste-routing.module';
import { ListPisteComponent } from './list-piste/list-piste.component';
import { DemoMaterialModule } from '../demo-material-module';


@NgModule({
  declarations: [
    ListPisteComponent
  ],
  imports: [
    CommonModule,
    PisteRoutingModule,
    DemoMaterialModule
  ]
})
export class PisteModule { }
