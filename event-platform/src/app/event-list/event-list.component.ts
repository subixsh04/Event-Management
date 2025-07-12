import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  events = [
    {
      id: '1',
      title: 'Tech Talk 2025',
      date: '2025-07-15',
      location: 'Online',
      description: 'Explore the future of AI and Web3.',
      image: 'assets/images/event-img1.jpg'
    },
    {
      id: '2',
      title: 'Design Bootcamp',
      date: '2025-07-18',
      location: 'Chennai',
      description: 'Hands-on Angular training for beginners.',
      image: 'assets/images/event-img1.jpg'
    }
  ];
}
