import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { RouterModule, ActivatedRoute, UrlSerializer } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './../header/header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { EventPage } from './event.page';

describe('EventPage', () => {
  let component: EventPage;
  let fixture: ComponentFixture<EventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPage, HeaderComponent ],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot(), FontAwesomeModule, RouterModule],
      providers: [
        UrlSerializer,
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy }, 
        { provide: APP_BASE_HREF, useValue: '/my/app'},
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

    fixture = TestBed.createComponent(EventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
