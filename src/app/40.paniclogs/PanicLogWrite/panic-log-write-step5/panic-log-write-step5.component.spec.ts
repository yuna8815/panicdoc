import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PanicLogWriteStep5Component } from './panic-log-write-step5.component';

describe('PanicLogWriteStep5Component', () => {
  let component: PanicLogWriteStep5Component;
  let fixture: ComponentFixture<PanicLogWriteStep5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PanicLogWriteStep5Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PanicLogWriteStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
