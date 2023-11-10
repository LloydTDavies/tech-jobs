import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from '../job-card/job-card.component';

@Component({
  selector: 'tech-jobs-jobs-list',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss'],
})
export class JobsListComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input({required: true}) jobs!: any[];
}
