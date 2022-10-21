import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyPanicFactorsStep2Component } from './my-panic-factors-step2.component';

describe('MyPanicFactorsStep2Component', () => {
  let component: MyPanicFactorsStep2Component;
  let fixture: ComponentFixture<MyPanicFactorsStep2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPanicFactorsStep2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyPanicFactorsStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
