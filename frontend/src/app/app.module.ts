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


import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ListComponent } from './views/list/list.component';
import { MapComponent } from './views/map/map.component';
import { HelpComponent } from './views/help/help.component';
import { SettingsComponent } from './views/settings/settings.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

import { EventsComponent } from './models/events/events.component';
import { EventsApiService } from './models/events/events-api.service';



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
    
  ],
  providers: [EventsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
