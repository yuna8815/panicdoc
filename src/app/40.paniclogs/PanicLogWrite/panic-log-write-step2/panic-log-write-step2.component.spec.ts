import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PanicLogWriteStep2Component } from './panic-log-write-step2.component';

describe('PanicLogWriteStep2Component', () => {
  let component: PanicLogWriteStep2Component;
  let fixture: ComponentFixture<PanicLogWriteStep2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PanicLogWriteStep2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PanicLogWriteStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
