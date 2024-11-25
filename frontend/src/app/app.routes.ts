import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ProjectsPage } from './projects-page/projects-page.component'
import { CVPage } from './cv-page/cv-page.component'
import { ContactPage } from './contact-page/contact-page.component'

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'projects', component: ProjectsPage },
    {path: 'cv', component: CVPage },
    {path: 'contact', component: ContactPage }
];
