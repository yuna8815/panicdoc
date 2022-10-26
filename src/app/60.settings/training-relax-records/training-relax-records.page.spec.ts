import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TrainingRelaxRecordsPage } from './training-relax-records.page';


describe('TrainingRelaxRecordsPage', () => {
  let component: TrainingRelaxRecordsPage;
  let fixture: ComponentFixture<TrainingRelaxRecordsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingRelaxRecordsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingRelaxRecordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
