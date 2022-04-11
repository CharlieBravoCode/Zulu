
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
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
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

  addRowData(row_obj){
    this.eventsList.push({
      identifier:row_obj.identifier,
      title:row_obj.title,
      location:row_obj.location
    });
    this.table.renderRows();
  }


  updateRowData(row_obj){
    this.eventsList = this.eventsList.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.title = row_obj.name;
      }
      return true;
    });
  }

  deleteRowData(row_obj){
    this.eventsList = this.eventsList.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
  

  public currentEvent;


  public selectEvent(event: any, item: any) {
    this.currentEvent = item.name;
  }

  ngOnDestroy() {
    this.eventsListSubs.unsubscribe();
  }

}

