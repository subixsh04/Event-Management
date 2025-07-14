import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'events', component: EventListComponent},
    {path: 'event/:id', component: EventDetailComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminDashboardComponent},
    { path: '**', redirectTo: '' }
];
