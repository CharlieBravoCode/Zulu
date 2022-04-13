
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from '../../env';
import { Event } from './events.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EventsApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || 'Error: Unable to complete request.');
  }

   /** GET events from the server */
  getEvents(): Observable<Event[]> {
    return this.http
      .get<Event[]>(`${API_URL}/events`)
      .pipe
        (catchError(EventsApiService._handleError));
  }

  getEvent(): Observable<Event[]> {
    return this.http
      .get<Event[]>(`${API_URL}/events/events<int:id>`)
  }

  saveEvent(event: Event): Observable<any> {
    return this.http
      .post(`${API_URL}/events`, event);
  }

  editEvent(event: Event, events_id: number): Observable<any> {
    return this.http
      .put(`${API_URL}/events/${events_id}`, event);
      
  }

  deleteEvent(event: Event, events_id: number): Observable<any> {
    return this.http
      .delete(`${API_URL}/events/${events_id}`);
      
  }

}