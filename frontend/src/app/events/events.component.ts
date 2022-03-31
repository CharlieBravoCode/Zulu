
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event } from './events.model';
import { EventsApiService } from './events-api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})


export class EventsComponent implements OnInit, OnDestroy {
  title = 'frontend';

  eventsListSubs: Subscription;
  eventsList: Event[];

  displayedColumns: string[] = ['title', 'identifier'];

  constructor(private eventsApi: EventsApiService) {
  }

  ngOnInit() {
    this.eventsListSubs = this.eventsApi
      .getExams()
      .subscribe(res => {
          this.eventsList = res;
        },
        console.error
      );
  }

 
    ngOnDestroy() {
    this.eventsListSubs.unsubscribe();
  }

}
