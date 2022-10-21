import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmdProgramsGuideCardComponent } from './smd-programs-guide-card.component';

describe('SmdProgramsGuideCardComponent', () => {
  let component: SmdProgramsGuideCardComponent;
  let fixture: ComponentFixture<SmdProgramsGuideCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SmdProgramsGuideCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmdProgramsGuideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
