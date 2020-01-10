import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AthletePage } from './athlete.page';

describe('AthletePage', () => {
  let component: AthletePage;
  let fixture: ComponentFixture<AthletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AthletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
