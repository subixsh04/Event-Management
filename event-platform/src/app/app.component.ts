// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  template: `<app-navbar></app-navbar> 
              <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {}
