import { RouterModule, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { Tab3Page } from './tab3.page';
import { HeaderComponent } from '../header/header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab3Page, HeaderComponent],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot(), FontAwesomeModule, RouterModule, RouterTestingModule],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
