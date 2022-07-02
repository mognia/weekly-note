import { Component, OnInit } from '@angular/core';
import {CalenderService} from "../../services/calender/calender.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-days-section',
  templateUrl: './days-section.component.html',
  styleUrls: ['./days-section.component.scss']
})
export class DaysSectionComponent implements OnInit {
   getDaysSubc: Subscription | undefined;
    days : number[] | undefined ;
  constructor(public calenderService: CalenderService) { }

  ngOnInit(): void {
    this.getDays()
  }
  getDays() {
    this.getDaysSubc = this.calenderService.getDays().subscribe(days => {
      this.days = days
    })
  }
}
