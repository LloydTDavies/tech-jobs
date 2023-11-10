import { Route } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';

export const appRoutes: Route[] = [
    {
        path:'jobs',
        component: JobsComponent
    }
];
