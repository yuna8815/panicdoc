import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmdPanicLogCardViewComponent } from './smd-panic-log-card-view.component';

describe('SmdPanicLogCardViewComponent', () => {
  let component: SmdPanicLogCardViewComponent;
  let fixture: ComponentFixture<SmdPanicLogCardViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SmdPanicLogCardViewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmdPanicLogCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
