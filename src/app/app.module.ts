import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { DaysHolderComponent } from './components/days-holder/days-holder.component';
import { LabelsSectionComponent } from './components/labels-section/labels-section.component';
import { CardsComponent } from './components/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {ApiService} from "./services/api/api.service";
import {HttpClientModule} from "@angular/common/http";
import { CalenderComponent } from './components/calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    DaysHolderComponent,
    LabelsSectionComponent,
    CardsComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
