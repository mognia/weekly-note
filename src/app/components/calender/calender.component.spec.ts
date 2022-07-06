import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderComponent } from './calender.component';
import {click, expectText} from "../../helpers/spec-helpers/element.spec-helper";
const startCount = 1
describe('CalenderComponent', () => {
  let component: CalenderComponent;
  let fixture: ComponentFixture<CalenderComponent>;

  function expectCount(count: number): void {
    expectText(fixture, 'count', String(count));
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderComponent ]
    }).compileComponents();
    fixture = TestBed.createComponent(CalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shows the start week', () => {
    expectCount(startCount);
  });
  it('increments the week', () => {
    click(fixture, 'increment-button');
    fixture.detectChanges();
    expectCount(startCount + 1);
  });

  it('decrements the week', () => {
    click(fixture, 'decrement-button');
    fixture.detectChanges();
    expectCount(startCount - 1);
  });
});
