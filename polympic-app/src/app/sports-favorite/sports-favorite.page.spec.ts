import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SportsFavoritePage } from './sports-favorite.page';

describe('SportsFavoritePage', () => {
  let component: SportsFavoritePage;
  let fixture: ComponentFixture<SportsFavoritePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsFavoritePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SportsFavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
