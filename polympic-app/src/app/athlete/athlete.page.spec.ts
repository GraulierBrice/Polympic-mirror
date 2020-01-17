import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './../header/header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { RouterTestingModule } from '@angular/router/testing';
import { AthletePage } from './athlete.page';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

describe('AthletePage', () => {
  let component: AthletePage;
  let fixture: ComponentFixture<AthletePage>;

  const fakeActivatedRoute = {
    snapshot: { data: {}}
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthletePage, HeaderComponent ],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot(), FontAwesomeModule, RouterModule, RouterTestingModule],
      providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute}
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(AthletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
});
