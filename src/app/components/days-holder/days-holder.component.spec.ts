import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysHolderComponent } from './days-holder.component';

describe('DaysHolderComponent', () => {
  let component: DaysHolderComponent;
  let fixture: ComponentFixture<DaysHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
