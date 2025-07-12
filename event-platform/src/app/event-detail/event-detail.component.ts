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
export class EventDetailComponent {

  eventId: string = '';
  event: any;

  allEvents = [
    {id: '1', title: 'Tech talk 2025', date: '2025-07-15', location: 'Online', description: 'Explore AI and Web3.' },
    { id: '2', title: 'Design Bootcamp', date: '2025-07-18', location: 'Chennai', description: 'Angular training.' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.params['id'];
    this.event = this.allEvents.find(e => e.id === this.eventId);
  }

}
