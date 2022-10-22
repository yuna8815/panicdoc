import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PanicLogWriteStep1Component } from './panic-log-write-step1.component';

describe('PanicLogWriteStep1Component', () => {
  let component: PanicLogWriteStep1Component;
  let fixture: ComponentFixture<PanicLogWriteStep1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PanicLogWriteStep1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PanicLogWriteStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
