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
    {path: 'admin', component: AdminDashboardComponent, children: [{ path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'events', loadComponent: () => import('./admin/event-management/event-management.component').then(m => m.EventManagementComponent) },
    { path: 'users', loadComponent: () => import('./admin/user-management/user-management.component').then(m => m.UserManagementComponent) }]},
    { path: '**', redirectTo: '' }
];
