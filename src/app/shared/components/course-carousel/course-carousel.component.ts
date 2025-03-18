import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-carousel.component.html',
  styleUrl: './course-carousel.component.css'
})
export class CourseCarouselComponent {
  @Input() difCarousel! : string;
  @Input() title!: string;
  @Input() courses!: { 
    image: string; 
    name: string; 
    authorName: string;
    averageRating: number;
    reviewCount: number;
    price: number;
  }[];
  groupedCourses: any[][] = [];

  ngOnInit() {
    this.groupCourses();
  }

  groupCourses() {
    this.groupedCourses = [];
    for (let i = 0; i < this.courses.length; i += 5) {
      this.groupedCourses.push(this.courses.slice(i, i + 5));
    }
  }
}
