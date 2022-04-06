
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event } from './events.model';
import { EventsApiService } from './events-api.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

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

  
  clickedRow = new Set<Event>();
  selection = new SelectionModel<Event>(false, []);

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

  public currentEvent;

  public selectEvent(event: any, item: any) {

    this.currentEvent = item.name;
  }

  ngOnDestroy() {
    this.eventsListSubs.unsubscribe();
  }

}
