import { TestBed } from '@angular/core/testing';

import { CalenderService } from './calender.service';
import {first} from "rxjs/operators";

describe('CalenderService', () => {
  let calenderService: CalenderService;
  function expectCount(count: number[]): void {
    let actualDay: number[] | undefined;
    calenderService
      .getDays()
      .pipe(first())
      .subscribe((actualDay2:any) => {
        actualDay = actualDay2;
      });
    expect(actualDay).toEqual(count);
  }
  beforeEach(() => {
    calenderService = new CalenderService();
  });

  it('set day', () => {
    calenderService.setDays([6,7,8,9,10]);
    expectCount([6,7,8,9,10]);
  });
});
