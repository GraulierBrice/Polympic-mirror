import { TestBed } from '@angular/core/testing';

import { SportsFavoriteService } from './sports-favorite.service';

describe('SportsFavoriteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportsFavoriteService = TestBed.get(SportsFavoriteService);
    expect(service).toBeTruthy();
  });
});
