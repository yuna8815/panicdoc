import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmdEmotionScoreViewComponent } from './smd-emotion-score-view.component';

describe('SmdEmotionScoreViewComponent', () => {
  let component: SmdEmotionScoreViewComponent;
  let fixture: ComponentFixture<SmdEmotionScoreViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SmdEmotionScoreViewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmdEmotionScoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
