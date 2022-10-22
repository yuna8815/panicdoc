import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyPanicFactorsStep1Component } from './my-panic-factors-step1.component';

describe('MyPanicFactorsStep1Component', () => {
  let component: MyPanicFactorsStep1Component;
  let fixture: ComponentFixture<MyPanicFactorsStep1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPanicFactorsStep1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyPanicFactorsStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
