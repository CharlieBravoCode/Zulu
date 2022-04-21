import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table'  
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ListComponent } from './views/list/list.component';
import { MapComponent } from './views/map/map.component';
import { HelpComponent } from './views/help/help.component';
import { SettingsComponent } from './views/settings/settings.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { NewEventButtonComponent } from './models/events/buttons/new-event/button-new-event.component';
import { DialogBoxEditComponent } from './models/events/buttons/dialog-box-edit/dialog-box-edit.component';
import { DialogBoxDeleteComponent } from './models/events/buttons/dialog-box-delete/dialog-box-delete.component';
import { MapModuleComponent } from './models/map-module/map-module.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// Map-Module Services
import { PopupService } from './models/map-module/map-services/popup.service';
import { MarkerService } from './models/map-module/map-services/marker.service';
import { ShapeService } from './models/map-module/map-services/shape.service';


import { EventsComponent } from './models/events/events.component';
import { EventsApiService } from './models/events/events-api.service';
import { MapApiService } from './models/map-module/map-services/map-api.service';



@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent, 
    ListComponent, 
    MapComponent, 
    HelpComponent,
    SettingsComponent, 
    NotFoundComponent,
    EventsComponent,
    NewEventButtonComponent,
    DialogBoxEditComponent,
    DialogBoxDeleteComponent,
    MapModuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,    
    LeafletModule,
    MatSelectModule,
  ],
  providers: [
    EventsApiService,
    MapApiService,
    MarkerService, 
    PopupService,
    ShapeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
