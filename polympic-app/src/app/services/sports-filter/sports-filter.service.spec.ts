import { TestBed } from '@angular/core/testing';

import { SportsFilterService } from './sports-filter.service';

describe('SportsFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportsFilterService = TestBed.get(SportsFilterService);
    expect(service).toBeTruthy();
  });
});
