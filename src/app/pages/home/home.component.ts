import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CategoryBarComponent } from '../../shared/components/category-bar/category-bar.component';
import { CommonModule } from '@angular/common';
import { CourseCarouselComponent } from '../../shared/components/course-carousel/course-carousel.component';
import { RouterLink } from '@angular/router';
import { TopPickCourseComponent } from '../../shared/components/top-pick-course/top-pick-course.component';
import { WeekStreakComponent } from '../../shared/components/my-courses/week-streak/week-streak.component';

declare var Swiper: any;


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CommonModule,CourseCarouselComponent,RouterLink,TopPickCourseComponent,WeekStreakComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courses = [
    {
      image: 'assets/logo-course.jpg',
      name: 'Angular Mastery',
      authorName: 'John Doe',
      averageRating: 4.5,
      reviewCount: 1200,
      price: 499000
    },
    {
      image: 'assets/logo-course.jpg',
      name: 'React Complete Guide',
      authorName: 'Jane Smith',
      averageRating: 4.8,
      reviewCount: 800,
      price: 599000
    },
    {
      image: 'assets/logo-course.jpg',
      name: 'Vue.js Essentials',
      authorName: 'Alex Johnson',
      averageRating: 4.2,
      reviewCount: 500,
      price: 399000
    },
    {
      image: 'assets/logo-course.jpg',
      name: 'Node.js Backend Development',
      authorName: 'Mike Brown',
      averageRating: 4.7,
      reviewCount: 1000,
      price: 549000
    },
    {
      image: 'assets/logo-course.jpg',
      name: 'Fullstack Web Development',
      authorName: 'Sarah Lee',
      averageRating: 4.6,
      reviewCount: 950,
      price: 649000
    },
    {
      image: 'assets/logo-course.jpg',
      name: 'Python for Beginners',
      authorName: 'David Wilson',
      averageRating: 4.3,
      reviewCount: 700,
      price: 299000
    },
    {
      image: 'assets/logo-course.jpg',
      name: 'Fullstack Web Development',
      authorName: 'Sarah Lee',
      averageRating: 4.6,
      reviewCount: 950,
      price: 649000
    },
    {
      image: 'assets/logo-course.jpg',
      name: 'Fullstack Web Development',
      authorName: 'Sarah Lee',
      averageRating: 4.6,
      reviewCount: 950,
      price: 649000
    },
    {
      image: 'assets/logo-course.jpg',
      name: 'Fullstack Web Development',
      authorName: 'Sarah Lee',
      averageRating: 4.6,
      reviewCount: 950,
      price: 649000
    },
    {
      image: 'assets/logo-course.jpg',
      name: 'Fullstack Web Development',
      authorName: 'Sarah Lee',
      averageRating: 4.6,
      reviewCount: 950,
      price: 649000
    }
  ];
}
