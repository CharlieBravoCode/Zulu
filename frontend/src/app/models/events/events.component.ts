
import { Component, OnDestroy, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event } from './events.model';
import { EventsApiService } from './events-api.service';
import { SelectionModel } from '@angular/cdk/collections';

import { DialogBoxEditComponent } from './buttons/dialog-box-edit/dialog-box-edit.component';
import { DialogBoxDeleteComponent } from './buttons/dialog-box-delete/dialog-box-delete.component';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})


export class EventsComponent implements OnInit, OnDestroy {
  title = 'frontend';

  selectedValue: string;
  eventsListSubs: Subscription;
  eventsList: Event[];

  displayedColumns: string[] = ['identifier', 'title', 'location', 'action'];
  
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

  
  openDialog_edit(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxEditComponent, {
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

  openDialog_delete(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxDeleteComponent, {
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

