import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {CalenderService} from "../../services/calender/calender.service";
import {Subscription} from "rxjs";

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

  constructor(public calenderService: CalenderService) {
  }

  ngOnInit(): void {
    this.getDaysSubc = this.calenderService.getDays().subscribe((data) => {
      this.days = [];
      for (const day of data) {
        this.days.push({day: day})
      }
      console.log(this.notes);
      this.setDayNote();
      console.log(this.days)
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
