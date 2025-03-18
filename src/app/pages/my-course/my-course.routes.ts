import { Routes } from '@angular/router';
import { MyCourseComponent } from './my-course.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { AllCoursesComponent } from '../../shared/components/my-courses/all-courses/all-courses.component';
import { MyListsComponent } from '../../shared/components/my-courses/my-lists/my-lists.component';
import { WishListsComponent } from '../../shared/components/my-courses/wish-lists/wish-lists.component';




export const routes: Routes = [
    {path:'',component:MyCourseComponent,
        children: [
            { path: '', redirectTo: 'all-courses', pathMatch: 'full' },
            { path: 'all-courses', component: AllCoursesComponent },
            { path: 'my-lists', component: MyListsComponent },
            { path: 'wish-lists', component: WishListsComponent }
        ]
    }
];
