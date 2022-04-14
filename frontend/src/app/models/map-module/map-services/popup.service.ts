import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
      `<div>Capital: ${ data.identifier }</div>` +
      `<div>State: ${ data.title }</div>` +
      `<div>State: ${ data.location }</div>`
  }
}