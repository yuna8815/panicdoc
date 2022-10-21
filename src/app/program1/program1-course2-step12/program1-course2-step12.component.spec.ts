import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Program1Course2Step12Component } from './program1-course2-step12.component';

describe('Program1Course2Step12Component', () => {
  let component: Program1Course2Step12Component;
  let fixture: ComponentFixture<Program1Course2Step12Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Program1Course2Step12Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Program1Course2Step12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});