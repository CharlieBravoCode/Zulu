
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event } from './events.model';
import { EventsApiService } from './events-api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})


export class EventsComponent implements OnInit, OnDestroy {
  title = 'frontend';

  eventsListSubs: Subscription;
  eventsList: Event[];

  displayedColumns: string[] = ['identifier', 'title', 'location'];

  constructor(private eventsApi: EventsApiService) {
  }
  ngOnInit() {
    this.eventsListSubs = this.eventsApi
      .getEvent()
      .subscribe(res => {
          this.eventsList = res;
        },
        console.error
      );
      var datasource = this.eventsList;
    }


    ngOnDestroy() {
    this.eventsListSubs.unsubscribe();
  }

}
