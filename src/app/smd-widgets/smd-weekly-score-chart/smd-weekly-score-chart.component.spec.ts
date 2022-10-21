import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmdWeeklyScoreChartComponent } from './smd-weekly-score-chart.component';

describe('SmdWeeklyScoreChartComponent', () => {
  let component: SmdWeeklyScoreChartComponent;
  let fixture: ComponentFixture<SmdWeeklyScoreChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SmdWeeklyScoreChartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmdWeeklyScoreChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
