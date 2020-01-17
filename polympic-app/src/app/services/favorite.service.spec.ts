import { TestBed } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage';
import { FavoriteService } from './favorite.service';

describe('FavoriteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [IonicStorageModule.forRoot()]
  }));

  it('should be created', () => {
    const service: FavoriteService = TestBed.get(FavoriteService);
    expect(service).toBeTruthy();
  });
});
