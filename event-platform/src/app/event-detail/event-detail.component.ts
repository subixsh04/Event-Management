import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { title } from 'process';

@Component({
  standalone: true,
  selector: 'app-event-detail',
  imports: [CommonModule],
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit{

  eventId: string = '';
  event: any;

  allEvents = [
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.params['id'];
    this.event = this.allEvents.find(e => e.id === this.eventId);
  }

  onRSVP(): void {
    alert(`You have successfully RSVPed for ${this.event.title}`);
  }

}
