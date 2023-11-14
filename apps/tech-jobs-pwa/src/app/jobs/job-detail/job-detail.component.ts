import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Observable, of } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const JOBS = [
  {
    id: 1,
    title: 'Angular Developer',
    level: 'Senior',
    company: {
      name: 'IBM',
      img: 'https://pbs.twimg.com/profile_images/1677090954350583811/Xy93qVY4_400x400.jpg',
    },
    location: 'London',
    posted: new Date(),
    type: 'Full Time',
    salary: { min: 50000, max: 75000, currency: 'USD' },
    description: `
    Lorem ipsum dolor sit amet, an usu equidem sadipscing, pri nulla maiorum cu. Eum affert dolorum in, pro altera voluptua torquatos cu. Vis cu mundi iisque commune, pri nostrud scripserit ut. Ludus viderer moderatius cu cum. Atqui vocent albucius cu duo.

Exerci oblique qui ea, sonet debitis elaboraret eu qui, no sed sint elitr deseruisse. No has errem semper, eum ex docendi menandri. At vix ubique molestie. Novum oratio vix te, no eam liber tractatos referrentur, equidem ancillae incorrupte ea nec. Ex duis idque sea.

Causae habemus vel te. Erant paulo congue eu his. Mediocrem forensibus vel ut. Eu causae timeam usu, ex putent noster vis. No sapientem intellegebat vix, dolorum 
    `,
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
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
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
