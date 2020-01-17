import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { PopoverEventsComponent } from './popover-events.component';

describe('PopoverEventsComponent', () => {
  let component: PopoverEventsComponent;
  let fixture: ComponentFixture<PopoverEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverEventsComponent ],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot(), FontAwesomeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
