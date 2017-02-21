import { Component, OnInit } from '@angular/core';

// Model
import { MFTEvent } from '../models/mft-event';

import { MftEventsService } from '../mft-events.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: MFTEvent[];

  constructor(private mftEventsService: MftEventsService) {
  }

  ngOnInit() {
    this.events = this.mftEventsService.getMftEvents();
  }

}
