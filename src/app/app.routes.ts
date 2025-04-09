import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero/hero.component';
import { AboutComponent } from './about/about/about.component';
import { ExperienceComponent } from './experience/experience/experience.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { NotFoundComponent } from './notFound/not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HeroComponent },
    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contacts', component: ContactsComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
];
