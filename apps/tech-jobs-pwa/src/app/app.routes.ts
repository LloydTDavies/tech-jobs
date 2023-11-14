import { Route } from '@angular/router';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';

// Need to have default route
export const appRoutes: Route[] = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  {
    path: 'jobs',
    loadComponent:() => import('./jobs/jobs.component').then( mod => mod.JobsComponent),
  },
  {
    path: 'jobs/:id', //todo
    component: JobDetailComponent,
  },
];
