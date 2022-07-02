import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysSectionComponent } from './days-section.component';

describe('DaysSectionComponent', () => {
  let component: DaysSectionComponent;
  let fixture: ComponentFixture<DaysSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
