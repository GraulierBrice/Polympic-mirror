import { TestBed } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage';

import { SportsFilterService } from './sports-filter.service';

describe('SportsFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [IonicStorageModule.forRoot()]
  }));

  it('should be created', () => {
    const service: SportsFilterService = TestBed.get(SportsFilterService);
    expect(service).toBeTruthy();
  });
});
