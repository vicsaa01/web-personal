import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { TechComponent } from './tech/tech.component'

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'tech-stack', component: TechComponent }
];
