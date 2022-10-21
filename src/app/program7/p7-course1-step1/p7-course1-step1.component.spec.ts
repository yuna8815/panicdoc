import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { P7Course1Step1Component } from './p7-course1-step1.component';

describe('P7Course1Step1Component', () => {
  let component: P7Course1Step1Component;
  let fixture: ComponentFixture<P7Course1Step1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ P7Course1Step1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(P7Course1Step1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
