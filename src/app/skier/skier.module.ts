import { TooltipComponent } from './../material-component/tooltip/tooltip.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkierRoutingModule } from './skier-routing.module';
import { ListSkierComponent } from './list-skier/list-skier.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialComponentsModule } from '../material-component/material.module';
import { ButtonsComponent } from '../material-component/buttons/buttons.component';
import { GridComponent } from '../material-component/grid/grid.component';
import { ListsComponent } from '../material-component/lists/lists.component';
import { MenuComponent } from '../material-component/menu/menu.component';
import { TabsComponent } from '../material-component/tabs/tabs.component';
import { StepperComponent } from '../material-component/stepper/stepper.component';
import { ExpansionComponent } from '../material-component/expansion/expansion.component';
import { ChipsComponent } from '../material-component/chips/chips.component';
import { ToolbarComponent } from '../material-component/toolbar/toolbar.component';
import { ProgressSnipperComponent } from '../material-component/progress-snipper/progress-snipper.component';
import { ProgressComponent } from '../material-component/progress/progress.component';
import { DialogComponent } from '../material-component/dialog/dialog.component';
import { SnackbarComponent } from '../material-component/snackbar/snackbar.component';
import { SliderComponent } from '../material-component/slider/slider.component';
import { SlideToggleComponent } from '../material-component/slide-toggle/slide-toggle.component';
import { DemoMaterialModule } from '../demo-material-module';


@NgModule({
  declarations: [
    ListSkierComponent
  ],
  imports: [
    CommonModule,
    SkierRoutingModule,
    SharedModule,


    DemoMaterialModule
    
  ]
})
export class SkierModule { }
