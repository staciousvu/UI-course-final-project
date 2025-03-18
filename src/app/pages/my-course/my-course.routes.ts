import { Routes } from '@angular/router';
import { MyCourseComponent } from './my-course.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';



export const routes: Routes = [
    {path:'',component:MyCourseComponent,
        children: [
            {path:'test1',component:HeaderComponent},
            {path:'test2',component:NavbarComponent},
        ]
    }
];
