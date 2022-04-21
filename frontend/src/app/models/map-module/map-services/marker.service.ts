import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { geoJSON } from 'leaflet';
import * as geojson from 'geojson';
import { Feature } from 'geojson';
import { PopupService } from './popup.service';

import { Subscription } from 'rxjs';
import { MapApiService } from './map-api.service';
import { API_URL } from '../../../env';
import { __values } from 'tslib';


@Injectable({
  providedIn: 'root'
})

export class MarkerService {
  
  
  eventsListSubs: Subscription;
  // eventsListSubsGeoJSON: Subscription;
  eventsList: any;



  constructor(
   private http: HttpClient,
   private mapApi: MapApiService,
   private popupService: PopupService
  ) { }


   

  schiss: any

  fuckyou() {
    return this.http
      .get<any>(`${API_URL}/events/geojson`).subscribe({
              next: data => {
                this.schiss = (data);
                console.log("Here we call the schiss from backend");
                console.log(this.schiss);
                console.log("schiss from backend received");
              },
              error: err => console.error(err),
              complete: () => {
              console.log('done loading crises')
              console.log('Here we have complete-schiss')
              console.log(this.schiss);
              console.log('complete-schiss over')
              return this.schiss;
              },
    });
  }

  fuckyou_too() {
  this.schiss = this.http
    .get(`${API_URL}/events/geojson`)
  }

  eventsListSubsGeoJSON: Subscription = this.fuckyou();
   
  // crises = JSON.stringify(this.eventsListSubsGeoJSON.add(this.fuckyou()));
  
  crises: string = '/assets/data/Crisis_Kreis.Steinfurt.geojson';

  //crises = this.fuckyou_too();


  makeCapitalMarkers(map: L.Map): void {
      
    console.log("Input for: Here we try to draw the fucking map")
    console.log(this.crises);
    console.log("Input Map: here the fuck ends")
    this.http.get(this.crises).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);
       
        marker.addTo(map);
      }
    });
  }
}




/* 

  makeCapitalCircleMarkers(map: L.Map): void {
    console.log("this is the fuck")
    //this.crises = this.fuckyou();
    console.log(this.crises);
    console.log("here the fuck ends")
    //this.http.get(JSON.stringify(this.crises)).subscribe((res: any) => {
    this.http.get(this.crises).subscribe((data: any) => {
    const marker = L.markerClusterGroup();
    const geojsonMarkers = L.geoJSON(data, {
      pointToLayer: (feature, latlng) => {
        const circle = L.circleMarker([latlng.lat, latlng.lng], { radius: 20 }).addTo(map);;
        circle.setStyle({color: 'red'});
        circle.bindPopup(this.popupService.makeEventPopup(feature.properties));
        return circle;
      }
    });
    geojsonMarkers.addTo(map);
  }); 

  */
