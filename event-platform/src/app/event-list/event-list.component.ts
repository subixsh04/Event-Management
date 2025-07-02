import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  
  events = [
  { id: '1', title: 'Tech Talk 2025', date: '2025-07-15', location: 'Online',description: 'Explore the future of AI and Web3.' },
  { id: '2', title: 'Design Bootcamp', date: '2025-07-18', location: 'Chennai', description: 'Hands-on Angular training for beginners.' },
];

constructor() { }

ngOnit(): void {

}

}


