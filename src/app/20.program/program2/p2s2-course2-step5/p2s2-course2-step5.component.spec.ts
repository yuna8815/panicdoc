import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { P2s2Course2Step5Component } from './p2s2-course2-step5.component';

describe('P2s2Course2Step5Component', () => {
  let component: P2s2Course2Step5Component;
  let fixture: ComponentFixture<P2s2Course2Step5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ P2s2Course2Step5Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(P2s2Course2Step5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
