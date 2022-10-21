import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmdQuotationMessageCardComponent } from './smd-quotation-message-card.component';

describe('SmdQuotationMessageCardComponent', () => {
  let component: SmdQuotationMessageCardComponent;
  let fixture: ComponentFixture<SmdQuotationMessageCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SmdQuotationMessageCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmdQuotationMessageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
