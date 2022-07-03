import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {CalenderService} from "../../services/calender/calender.service";
import {Subscription} from "rxjs";
import {ResponsiveService} from "../../services/responsive/responsive.service";

interface dayObj {
  day: number;
  notes?: any[]
}

@Component({
  selector: 'app-labels-section',
  templateUrl: './labels-section.component.html',
  styleUrls: ['./labels-section.component.scss']
})
export class LabelsSectionComponent implements OnInit, OnDestroy {
  @Input() text: string | undefined;
  @Input() id: number | undefined;
  @Input() notes: any[] | undefined;
  days: dayObj[] = [];
  getDaysSubc: Subscription | undefined;
  isResponsive:boolean = false
   cols: number = 5;
  constructor(
    public calenderService: CalenderService,
    public responsiveService: ResponsiveService) {
  }

  ngOnInit(): void {
    this.responsiveService.resizeObservable$.subscribe(data => {
      this.isResponsive = data < 770;
      if (!this.isResponsive) {
        this.cols = 5
      }else {
        this.cols = 1
      }
    });
    this.getDaysSubc = this.calenderService.getDays().subscribe((data) => {
      this.days = [];
      for (const day of data) {
        this.days.push({day: day})
      }
      this.setDayNote();
    });
  }

  setDayNote() {
    for (let i = 0; i < this.days?.length; i++) {
      if (!this.days[i].notes) {
        this.days[i].notes = []
      }
      this.days[i].notes = this.notes?.filter((note) => {
        if (parseInt(note.startDate.split('/')[0]) === this.days[i].day) {
          return note
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.getDaysSubc) {
      this.getDaysSubc.unsubscribe()
    }
  }
}
