import { Route } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';

// Need to have default route
export const appRoutes: Route[] = [
    {
        path:'jobs',
        component: JobsComponent
    },
    {
        path:"jobs/:id",
        component: JobDetailComponent
    }
];
