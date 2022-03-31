
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from '../env';
import { Event } from './events.model';

@Injectable()
export class EventsApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || 'Error: Unable to complete request.');
  }

 
  getExams(): Observable<Event[]> {
    return this.http
      .get<Event[]>(`${API_URL}/events`)
      .pipe
        (catchError(EventsApiService._handleError));
  }

  saveExam(event: Event): Observable<any> {
    return this.http
      .post(`${API_URL}/events`, event);
  }

}