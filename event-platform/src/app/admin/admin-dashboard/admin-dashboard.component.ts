import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventManagementComponent } from "../event-management/event-management.component";
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-admin-dashboard',
  imports: [CommonModule, FormsModule, EventManagementComponent, AdminSidebarComponent, RouterOutlet],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

}
