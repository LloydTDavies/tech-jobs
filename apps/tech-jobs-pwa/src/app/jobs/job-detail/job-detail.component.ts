import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

const JOBS = [
  {
    id: 1,
    title: 'Angular Developer',
    level: 'Senior',
    company: 'BMI',
    location: 'London',
    salary: { min: 50000, max: 75000, currency: 'USD' },
  },
  {
    id: 2,
    title: 'React Developer',
    level: 'Mid',
    company: 'Intel',
    location: 'Remote',
    salary: { min: 40000, max: 55000, currency: 'EUR' },
  },
  {
    id: 3,
    title: 'Angular Developer',
    level: 'Junior',
    company: 'Admiral',
    location: 'Cardiff',
    salary: { min: 28000, max: 32000, currency: 'GBP' },
  },
  {
    id: 4,
    title: 'Angular Developer',
    level: 'Senior',
    company: 'BMI',
    location: 'London',
    salary: { min: 50000, max: 75000, currency: 'USD' },
  },
  {
    id: 5,
    title: 'React Developer',
    level: 'Mid',
    company: 'Intel',
    location: 'Remote',
    salary: { min: 40000, max: 55000, currency: 'EUR' },
  },
  {
    id: 6,
    title: 'Angular Developer',
    level: 'Junior',
    company: 'Admiral',
    location: 'Cardiff',
    salary: { min: 28000, max: 32000, currency: 'GBP' },
  },
];

@Component({
  selector: 'tech-jobs-job-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})
export class JobDetailComponent {
  @Input()
  set id(jobId: string) {
    this.job$ = of(JOBS.find((job) => job.id.toString() === jobId));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  job$: Observable<any | undefined> = of();
}
