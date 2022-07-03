import { TestBed } from '@angular/core/testing';

import { SectionFilterService } from './section-filter.service';

describe('SectionFilterService', () => {
  let service: SectionFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
