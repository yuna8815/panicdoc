import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Smd3ThoughtFlowDiagramComponent } from './smd3-thought-flow-diagram.component';

describe('Smd3ThoughtFlowDiagramComponent', () => {
  let component: Smd3ThoughtFlowDiagramComponent;
  let fixture: ComponentFixture<Smd3ThoughtFlowDiagramComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Smd3ThoughtFlowDiagramComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Smd3ThoughtFlowDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
