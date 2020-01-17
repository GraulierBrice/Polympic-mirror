import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { SportsFavoritePage } from './sports-favorite.page';
import { HeaderComponent } from '../header/header.component';
import { UrlSerializer } from '@angular/router';

describe('SportsFavoritePage', () => {
  let component: SportsFavoritePage;
  let fixture: ComponentFixture<SportsFavoritePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsFavoritePage, HeaderComponent ],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot(), FontAwesomeModule],
      providers: [Location, UrlSerializer,
        { provide: LocationStrategy, useClass: PathLocationStrategy }, { provide: APP_BASE_HREF, useValue: '/my/app'}]
    }).compileComponents();

    fixture = TestBed.createComponent(SportsFavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
