import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-admin-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  showAddForm = false;

  newEvent = {title: '', date: '', description: '', image: '' };

  events = [{ title: 'Sample Event', date: '2025-08-01', description: 'This is a sample event.', image: '' }];

  addEvent() {
    this.events.push({ ...this.newEvent });
    this.newEvent = { title: '', date: '', description: '', image: '' };
    this.showAddForm = false;
  }

  deleteEvent(index: number) {
    this.events.splice(index, 1);
  }

  editEvent(index: number) {
    const event = this.events[index];
    this.newEvent = { ...event };
    this.deleteEvent(index);
    this.showAddForm = true;
  }

}
