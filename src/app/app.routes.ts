import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Page1Component } from './pages/personalize/page1/page1.component';
import { Page2Component } from './pages/personalize/page2/page2.component';
import { MyCourseComponent } from './pages/my-course/my-course.component';

export const routes: Routes = [
    {path: '', component :HomeComponent},
    {path: 'personalize/field',component:Page1Component},
    {path: 'personalize/skills',component:Page2Component},
    {path:'mycourse',loadChildren:()=>import('./pages/my-course/my-course.routes').then(m => m.routes) }
];
