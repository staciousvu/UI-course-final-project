import { Component } from '@angular/core';
import { WeekStreakComponent } from '../week-streak/week-streak.component';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [WeekStreakComponent],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {

}
