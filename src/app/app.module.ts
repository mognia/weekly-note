import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { LabelsSectionComponent } from './components/labels-section/labels-section.component';
import { CardsComponent } from './components/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {ApiService} from "./services/api/api.service";
import {HttpClientModule} from "@angular/common/http";
import { CalenderComponent } from './components/calender/calender.component';
import {CalenderService} from "./services/calender/calender.service";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import { CardDialogComponent } from './components/cards/card-dialog/card-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { DaysSectionComponent } from './components/days-section/days-section.component';
import {ResponsiveService} from "./services/responsive/responsive.service";

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LabelsSectionComponent,
    CardsComponent,
    CalenderComponent,
    CardDialogComponent,
    DaysSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [
    ApiService,
    CalenderService,
    ResponsiveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
