import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Program1Course2Step20Component } from './program1-course2-step20.component';

describe('Program1Course2Step20Component', () => {
  let component: Program1Course2Step20Component;
  let fixture: ComponentFixture<Program1Course2Step20Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Program1Course2Step20Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Program1Course2Step20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
