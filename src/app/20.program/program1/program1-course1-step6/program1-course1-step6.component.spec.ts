import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Program1Course1Step6Component } from './program1-course1-step6.component';

describe('Program1Course1Step6Component', () => {
  let component: Program1Course1Step6Component;
  let fixture: ComponentFixture<Program1Course1Step6Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Program1Course1Step6Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Program1Course1Step6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});