import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventsApiService } from "../../events-api.service";
import { Router } from "@angular/router";
import { Event } from "../../../../models/events/events.model";
import { Subscription } from 'rxjs';



@Component({
  selector: 'event-button-edit-event',
  templateUrl: './button-edit-event.component.html',
  styleUrls: ['./button-edit-event.component.scss']
})


// 
export class EditEventButtonComponent {
  events = {
    identifier: '',
    title: '',
    location: '',
    id: 0,
  };

  constructor(private eventsApi: EventsApiService, private router: Router) { }

  eventsListSubs: Subscription;
  eventsList: Event[];

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
  
  updateIdentifier(event: any) {
    this.events.identifier = event.target.value;
  }

  updateTitle(event: any) {
    this.events.title = event.target.value;
  }

  updateLocation(event: any) {
    this.events.location = event.target.value;
  }

  editEvent() {
    this.eventsApi
      .editEvent(this.events, this.events.id)
      .subscribe(
        () => this.router.navigate(['/list']),
        console.error
      );
  }
  
}
