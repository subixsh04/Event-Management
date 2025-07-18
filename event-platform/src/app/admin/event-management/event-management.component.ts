import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-event-management',
  imports: [CommonModule, FormsModule],
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent {
  showAddForm = false;

  newEvent = {
    title: '',
    date: '',
    description: '',
    image: ''
  };

  events = [
    {
      title: 'Sample Event',
      date: '2025-08-01',
      description: 'This is a sample event.',
      image: ''
    }
  ];

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
