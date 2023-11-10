import { Route } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';

// Need to have default route
export const appRoutes: Route[] = [
    {
        path:'jobs',
        component: JobsComponent
    }
];
