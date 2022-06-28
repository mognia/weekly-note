import {Component, OnInit} from '@angular/core';
import {CalenderService} from "../../services/calender/calender.service";

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  days: number[] = []

  constructor(public calenderService: CalenderService) {
  }

  ngOnInit(): void {
    this.createDays()
  }

  createDays(start?: number, isPrevious?: boolean) {
    if (!isPrevious) {
      let startPoint = start ? start + 1 : 1
      for (let i = startPoint; i <= startPoint + 4; i++) {
        this.days.push(i)
      }
    }else {
      let startPoint = start ? start-1  : 0
      for (let i = startPoint; i >= startPoint - 4; i--) {
        this.days.push(i)
      }
      this.days.reverse()
    }
    this.calenderService.setDays(this.days)
  }

  nextWeek() {
    let startOf:number | undefined = this.days.pop();
    this.days = [];
    this.createDays(startOf,false)
  }

  preWeek() {
    let startOf:number | undefined = this.days.shift();
    this.days = [];
    this.createDays(startOf,true)
  }
}
