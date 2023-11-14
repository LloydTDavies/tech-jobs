import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
@Component({
  standalone: true,
  imports: [NavigationComponent],
  selector: 'tech-jobs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tech-jobs-pwa';
}
