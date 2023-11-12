import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { ListInstructorComponent } from './list-instructor/list-instructor.component';
import { DemoMaterialModule } from '../demo-material-module';


@NgModule({
  declarations: [
    ListInstructorComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    DemoMaterialModule
  ]
})
export class InstructorModule { }
