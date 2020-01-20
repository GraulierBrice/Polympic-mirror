import { TestBed } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage';
import { SportsFavoriteService } from './sports-favorite.service';

describe('SportsFavoriteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [IonicStorageModule.forRoot()]
  }));

  it('should be created', () => {
    const service: SportsFavoriteService = TestBed.get(SportsFavoriteService);
    expect(service).toBeTruthy();
  });
});
