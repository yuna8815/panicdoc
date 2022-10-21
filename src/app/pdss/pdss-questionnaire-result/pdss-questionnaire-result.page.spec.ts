import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdssQuestionnaireResultPage } from './pdss-questionnaire-result.page';

describe('PdssQuestionnaireResultPage', () => {
  let component: PdssQuestionnaireResultPage;
  let fixture: ComponentFixture<PdssQuestionnaireResultPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PdssQuestionnaireResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdssQuestionnaireResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
