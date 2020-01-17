import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './../header/header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { EventsComponent } from './events.component';
import { RouterModule, UrlSerializer, ActivatedRoute } from '@angular/router';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsComponent, HeaderComponent ],
      imports: [IonicModule.forRoot(),IonicStorageModule.forRoot(), FontAwesomeModule, RouterModule],
      providers: [Geolocation, 
        UrlSerializer, LocalNotifications, 
        Location, 
        { provide: LocationStrategy, useClass: PathLocationStrategy }, { provide: APP_BASE_HREF, useValue: '/my/app'},
      

{
  provide: ActivatedRoute,
  useValue: {
    snapshot: {
      queryParamMap: {
        get(): number {
          return 6;
        }
      }
    }
  }
}


      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
});
