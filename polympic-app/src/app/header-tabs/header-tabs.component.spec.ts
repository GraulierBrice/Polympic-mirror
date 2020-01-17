import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { HeaderTabsComponent } from './header-tabs.component';

describe('HeaderTabsComponent', () => {
  let component: HeaderTabsComponent;
  let fixture: ComponentFixture<HeaderTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTabsComponent ],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
