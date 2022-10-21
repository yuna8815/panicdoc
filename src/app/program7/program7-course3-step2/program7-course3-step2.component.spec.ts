import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Program7Course3Step2Component } from './program7-course3-step2.component';

describe('Program7Course3Step2Component', () => {
  let component: Program7Course3Step2Component;
  let fixture: ComponentFixture<Program7Course3Step2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Program7Course3Step2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Program7Course3Step2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
