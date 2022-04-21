//dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventsApiService } from "../../events-api.service";
import { Router } from "@angular/router";


export interface EventsData {
  identifier: string;
  title: string;
  location: string;
  latitud: number;
  longitud: number;
  id: number;
}


@Component({
  selector: 'app-dialog-box-delete',
  templateUrl: './dialog-box-delete.component.html',
  styleUrls: ['./dialog-box-delete.component.scss']
})
export class DialogBoxDeleteComponent {

 
  events = {
    identifier: '',
    title: '',
    location: '',
    latitud: 0,
    longitud: 0,
    id: 0,
    
  };

  constructor(
    public dialogRef: MatDialogRef<DialogBoxDeleteComponent>,
    private eventsApi: EventsApiService, private router: Router,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: EventsData    ) {
      console.log(data);
      this.events = {...data};
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

  updateIdentifier(event: any) {
    this.events.identifier = event.target.value;
  }

  updateTitle(event: any) {
    this.events.title = event.target.value;
  }

  updateLocation(event: any) {
    this.events.location = event.target.value;
  }

  updateId(event: any) {
    this.events.id = event.target.value;
  }

  deleteEvent() {
    this.dialogRef.close({data:this.events});
    this.eventsApi
      .deleteEvent(this.events, this.events.id)
      .subscribe(
        () => 
        this.redirectTo('//list'),
        console.error,
      );
    }


  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
