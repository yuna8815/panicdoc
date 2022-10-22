import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { P2s2Course2Step2Component } from './p2s2-course2-step2.component';

describe('P2s2Course2Step2Component', () => {
  let component: P2s2Course2Step2Component;
  let fixture: ComponentFixture<P2s2Course2Step2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ P2s2Course2Step2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(P2s2Course2Step2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
