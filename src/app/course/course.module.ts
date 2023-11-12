import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { ListCourseComponent } from './list-course/list-course.component';
import { DemoMaterialModule } from '../demo-material-module';


@NgModule({
  declarations: [
    ListCourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    DemoMaterialModule
  ]
})
export class CourseModule { }
