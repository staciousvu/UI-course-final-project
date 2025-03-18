import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-my-course',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './my-course.component.html',
  styleUrl: './my-course.component.css'
})
export class MyCourseComponent {

}
