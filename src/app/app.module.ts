import { TooltipComponent } from './material-component/tooltip/tooltip.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { ButtonsComponent } from './material-component/buttons/buttons.component';
import { GridComponent } from './material-component/grid/grid.component';
import { ListsComponent } from './material-component/lists/lists.component';
import { MenuComponent } from './material-component/menu/menu.component';
import { TabsComponent } from './material-component/tabs/tabs.component';
import { StepperComponent } from './material-component/stepper/stepper.component';
import { ExpansionComponent } from './material-component/expansion/expansion.component';
import { ChipsComponent } from './material-component/chips/chips.component';
import { ToolbarComponent } from './material-component/toolbar/toolbar.component';
import { ProgressSnipperComponent } from './material-component/progress-snipper/progress-snipper.component';
import { ProgressComponent } from './material-component/progress/progress.component';
import { DialogComponent } from './material-component/dialog/dialog.component';
import { SnackbarComponent } from './material-component/snackbar/snackbar.component';
import { SliderComponent } from './material-component/slider/slider.component';
import { SlideToggleComponent } from './material-component/slide-toggle/slide-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    AppSidebarComponent,

    ButtonsComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,



    
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
