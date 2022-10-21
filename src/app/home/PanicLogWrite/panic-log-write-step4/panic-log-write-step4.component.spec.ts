import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PanicLogWriteStep4Component } from './panic-log-write-step4.component';

describe('PanicLogWriteStep4Component', () => {
  let component: PanicLogWriteStep4Component;
  let fixture: ComponentFixture<PanicLogWriteStep4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PanicLogWriteStep4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PanicLogWriteStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
