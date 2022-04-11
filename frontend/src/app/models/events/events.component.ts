
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event } from './events.model';
import { EventsApiService } from './events-api.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './buttons/dialog-box/dialog-box.component';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})


export class EventsComponent implements OnInit, OnDestroy {
  title = 'frontend';

  eventsListSubs: Subscription;
  eventsList: Event[];

  displayedColumns: string[] = ['identifier', 'title', 'location', 'id', 'action'];

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  public clickedRow = new Set<Event>();
  selection = new SelectionModel<Event>(false, []);

  constructor(private eventsApi: EventsApiService, public dialog: MatDialog) {
  }

  
  ngOnInit() {
    this.eventsListSubs = this.eventsApi
      .getEvents()
      .subscribe(res => {
          this.eventsList = res;
        },
        console.error
      );
      
      var eventsList = this.eventsList;
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    })
    // After closing the list componant should be refreshed

    dialogRef.afterClosed().subscribe(result => {
      this.table.renderRows();
    })
      this.eventsListSubs = this.eventsApi
        .getEvents()
        .subscribe(res => {
            this.eventsList = res;
          },
          console.error
        );
  }

 


  ngOnDestroy() {
    this.eventsListSubs.unsubscribe();
  }

}

