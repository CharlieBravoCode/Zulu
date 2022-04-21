
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../../env';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MapApiService {

  constructor(private http: HttpClient) {
  }

  getGeoJSON(): Observable<any> {
    return this.http
      .get(`${API_URL}/events/geojson`);
    
  }

  getGeoJSON_new(): Observable<any> {
    const shit = this.http
      .get(`${API_URL}/events/geojson`);
    
    console.log("This is" + shit);
    return shit; 
  }
 
}