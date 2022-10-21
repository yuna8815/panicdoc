import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Program3Course1Step1Component } from './program3-course1-step1.component';

describe('Program3Course1Step1Component', () => {
  let component: Program3Course1Step1Component;
  let fixture: ComponentFixture<Program3Course1Step1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Program3Course1Step1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Program3Course1Step1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
