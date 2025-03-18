import { Component } from '@angular/core';
import { WeekStreakComponent } from '../week-streak/week-streak.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [WeekStreakComponent,CommonModule],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {
  courses = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Adobe Photoshop CC Crash Course ${i + 1}`,
    author: 'Stephen Koel Soren',
    image: 'https://placehold.co/600x400',
    progress: Math.floor(Math.random() * 100), // Random tiến độ
    rating: Math.floor(Math.random() * 5) + 1, // Random từ 1-5 sao
  }));
}
