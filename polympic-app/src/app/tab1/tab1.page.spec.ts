import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderTabsComponent } from './../header-tabs/header-tabs.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { Tab1Page } from './tab1.page';
import { EventsComponent } from '../events/events.component';
import { RouterModule, UrlSerializer } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page, HeaderTabsComponent, EventsComponent],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot(), FontAwesomeModule, RouterModule, RouterTestingModule],
      providers: [Location, UrlSerializer, LocalNotifications, Geolocation,
        { provide: LocationStrategy, useClass: PathLocationStrategy }, { provide: APP_BASE_HREF, useValue: '/my/app'}]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
});
