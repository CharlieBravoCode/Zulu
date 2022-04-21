import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventsApiService } from "../../events-api.service";
import { Router } from "@angular/router";

interface cities_kreis_steinfurt {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'event-button-new-event',
  templateUrl: './button-new-event.component.html',
  styleUrls: ['./button-new-event.component.scss']
})


export class NewEventButtonComponent {
  events = {
    identifier: '',
    title: '',
    location: '',
    latitud: 0,
    longitud: 0
  }
  selectedValue: string;


  cities_kreis_steinfurts: cities_kreis_steinfurt[] = [
    {value: 'Altenberge', viewValue: 'Altenberge'},
    {value: 'Emsdetten', viewValue: 'Emsdetten'},
    {value: 'Greven', viewValue: 'Greven'},
    {value: 'Hopsten', viewValue: 'Hopsten'},
    {value: 'Hörstel', viewValue: 'Hörstel'},
    {value: 'Horstmar', viewValue: 'Horstmar'},
    {value: 'Ibbenbüren', viewValue: 'Ibbenbüren'},
    {value: 'Ladbergen', viewValue: 'Ladbergen'},
    {value: 'Laer', viewValue: 'Laer'},
    {value: 'Lengerich', viewValue: 'Lengerich'},
    {value: 'Lienen', viewValue: 'Lienen'},
    {value: 'Lotte', viewValue: 'Lotte'},
    {value: 'Metelen', viewValue: 'Metelen'},
    {value: 'Mettingen', viewValue: 'Mettingen'},
    {value: 'Neuenkirchen', viewValue: 'Neuenkirchen'},
    {value: 'Nordwalde', viewValue: 'Nordwalde'},
    {value: 'Ochtrup', viewValue: 'Ochtrup'},
    {value: 'Recke', viewValue: 'Recke'},
    {value: 'Rheine', viewValue: 'Rheine'},
    {value: 'Saerbeck', viewValue: 'Saerbeck'},
    {value: 'Steinfurt', viewValue: 'Steinfurt'},
    {value: 'Tecklenburg', viewValue: 'Tecklenburg'},
    {value: 'Westerkappeln', viewValue: 'Westerkappeln'},
    {value: 'Wettringen', viewValue: 'Wettringen'},
  ];

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
    this.events.location = this.selectedValue

    switch (this.selectedValue) {
      case 'Altenberge':
        this.events.latitud = 50.76444;
        this.events.longitud = 13.75778;
        break;
      case 'Emsdetten':
        this.events.latitud = 52.17278;
        this.events.longitud = 7.53444;
        break;
      case 'Greven':
        this.events.latitud = 52.09167;
        this.events.longitud = 7.60833;
        break;
      case 'Hopsten':
        this.events.latitud = 52.38204;
        this.events.longitud = 7.59894;
        break;
      case 'Hörstel':
        this.events.latitud = 52.29722;
        this.events.longitud = 7.58611;
        break;
      case 'Horstmar':
        this.events.latitud = 52.08056;
        this.events.longitud = 7.30833;
        break;
      case 'Ibbenbüren':
        this.events.latitud = 52.27778;
        this.events.longitud = 7.71667;
        break;
      case 'Ladbergen':
        this.events.latitud = 52.13772;
        this.events.longitud = 7.73972;
        break;
      case 'Laer':
        this.events.latitud = 52.05543;
        this.events.longitud = 7.35989;
        break;
      case 'Lengerich':
        this.events.latitud = 52.17500;
        this.events.longitud = 7.86667;
        break;
      case 'Lienen':
        this.events.latitud = 52.14546;
        this.events.longitud = 7.97486;
        break;
      case 'Lotte':
        this.events.latitud = 52.27769;
        this.events.longitud = 7.91968;
        break;
      case 'Metelen':
        this.events.latitud = 52.14537;
        this.events.longitud = 7.21328;
        break;
      case 'Mettingen':
        this.events.latitud = 52.31741;
        this.events.longitud = 7.78253;
        break;
      case 'Neuenkirchen':
        this.events.latitud = 52.23779;
        this.events.longitud = 7.37059;
        break;
      case 'Nordwalde':
        this.events.latitud = 52.08108;
        this.events.longitud = 7.47211;
        break;
      case 'Ochtrup':
        this.events.latitud = 52.20556;
        this.events.longitud = 7.19028;
        break;
      case 'Recke':
        this.events.latitud = 52.37033;
        this.events.longitud = 7.71650;
        break;
      case 'Rheine':
        this.events.latitud = 52.28037;
        this.events.longitud = 7.44011;
        break;
      case 'Saerbeck':
        this.events.latitud = 52.17528;
        this.events.longitud = 7.63091;
        break;
      case 'Steinfurt':
        this.events.latitud = 52.14750;
        this.events.longitud = 7.34417;
        break;
      case 'Tecklenburg':
        this.events.latitud = 52.21980;
        this.events.longitud = 7.80955;
        break;
      case 'Westerkappeln':
        this.events.latitud = 52.31546;
        this.events.longitud = 7.87909;
        break;
      case 'Wettringen':
        this.events.latitud = 52.20976;
        this.events.longitud = 7.31399;
        break;
    }
    this.eventsApi
      .saveEvent(this.events)
      .subscribe(
        () => this.router.navigate(['/list']),
        console.error
      );
  }

  cancelNewEvent(){
    this.router.navigate(['/list']);
  }

}

