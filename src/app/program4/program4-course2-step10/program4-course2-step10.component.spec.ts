import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Program4Course2Step10Component } from './program4-course2-step10.component';

describe('Program4Course2Step10Component', () => {
  let component: Program4Course2Step10Component;
  let fixture: ComponentFixture<Program4Course2Step10Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Program4Course2Step10Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Program4Course2Step10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
