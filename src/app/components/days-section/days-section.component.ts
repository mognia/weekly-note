import { Component, OnInit } from '@angular/core';
import {CalenderService} from "../../services/calender/calender.service";
import {Subscription} from "rxjs";
import {ResponsiveService} from "../../services/responsive/responsive.service";

@Component({
  selector: 'app-days-section',
  templateUrl: './days-section.component.html',
  styleUrls: ['./days-section.component.scss']
})
export class DaysSectionComponent implements OnInit {
   getDaysSubc: Subscription | undefined;
    days : number[] | undefined ;
   isResponsive: boolean = false;
   cols:number = 5
  constructor(
    public calenderService: CalenderService,
    public responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    this.getDays()
    this.responsiveService.resizeObservable$.subscribe(data => {
      this.isResponsive = (data <= 768);
      if (!this.isResponsive) {
        this.cols = 5
      }else {
        this.cols = 1
      }
    });
  }
  getDays() {
    this.getDaysSubc = this.calenderService.getDays().subscribe(days => {
      this.days = days
    })
  }
}
