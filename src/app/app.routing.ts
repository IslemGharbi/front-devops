import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'skier',
        loadChildren:
          () => import('./skier/skier.module').then(m => m.SkierModule)
      },
      {
        path: 'subscription',
        loadChildren:
          () => import('./subscription/subscription.module').then(m => m.SubscriptionModule)
      },

      {
        path: 'course',
        loadChildren:
          () => import('./course/course.module').then(m => m.CourseModule)
      },

      {
        path: 'registration',
        loadChildren:
          () => import('./registration/registration.module').then(m => m.RegistrationModule)
      },

      {
        path: 'piste',
        loadChildren:
          () => import('./piste/piste.module').then(m => m.PisteModule)
      },

      {
        path: 'instructor',
        loadChildren:
          () => import('./instructor/instructor.module').then(m => m.InstructorModule)
      },



      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];
