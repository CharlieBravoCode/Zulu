import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventsApiService} from "../../events-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'event-button-edit-event',
  templateUrl: './button-edit-event.component.html',
  styleUrls: ['./button-edit-event.component.scss']
})


export class EditEventButtonComponent {
  events = {
    identifier: '',
    title: '',
    location: '',
  };

  constructor(private eventsApi: EventsApiService, private router: Router) { }

  
  updateIdentifier(event: any) {
    this.events.identifier = event.target.value;
  }

  updateTitle(event: any) {
    this.events.title = event.target.value;
  }

  updateLocation(event: any) {
    this.events.location = event.target.value;
  }

  saveEvent() {
    this.eventsApi
      .saveEvent(this.events)
      .subscribe(
        () => this.router.navigate(['/list']),
        console.error
      );
  }
}