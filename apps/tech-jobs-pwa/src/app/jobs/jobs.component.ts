import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JobsListComponent } from './jobs-list/jobs-list.component';

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
  standalone: true,
  imports: [CommonModule, JobsListComponent],
  selector: 'tech-jobs-root',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {
  jobs = JOBS;
}
