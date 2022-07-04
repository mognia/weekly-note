import {Component, OnInit} from '@angular/core';
import {CalenderService} from "../../services/calender/calender.service";
import {ResponsiveService} from "../../services/responsive/responsive.service";

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  days: number[] = [];
  week: number = 0;
   isResponsive: boolean = false;

  constructor(
    public calenderService: CalenderService,
    public responsiveService: ResponsiveService,
    ) {
  }

  ngOnInit(): void {
    this.createDays()
    this.responsiveService.resizeObservable$.subscribe(data => {
      this.isResponsive = data < 770;
    });
  }

  createDays(start?: number, isPrevious?: boolean) {
    if (!isPrevious) {
      this.week += 1;
      let startPoint = start ? start + 1 : 1;
      for (let i = startPoint; i <= startPoint + 4; i++) {
        this.days.push(i)
      }
    } else {
      this.week -=1;
      let startPoint = start ? start - 1 : 0;
      for (let i = startPoint; i >= startPoint - 4; i--) {
        this.days.push(i)
      }
      this.days.reverse()
    }
    this.calenderService.setDays(this.days)
  }

  updateWeek(isPrevious: boolean) {
    let startOf: number | undefined = isPrevious ? this.days.shift() : this.days.pop();
    this.days = [];
    this.createDays(startOf, isPrevious)
  }

}
