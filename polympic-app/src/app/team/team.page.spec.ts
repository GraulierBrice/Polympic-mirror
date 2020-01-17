import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { RouterModule, ActivatedRoute, UrlSerializer } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { TeamPage } from './team.page';
import { HeaderComponent } from '../header/header.component';

describe('TeamPage', () => {
  let component: TeamPage;
  let fixture: ComponentFixture<TeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPage, HeaderComponent ],
      imports: [IonicModule.forRoot(),IonicStorageModule.forRoot(), FontAwesomeModule, RouterModule],
      providers: [ UrlSerializer,
        { provide: LocationStrategy, useClass: PathLocationStrategy }, { provide: APP_BASE_HREF, useValue: '/my/app'},
        Location,
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

    fixture = TestBed.createComponent(TeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
});
