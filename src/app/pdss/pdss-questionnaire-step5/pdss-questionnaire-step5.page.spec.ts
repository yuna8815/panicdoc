import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdssQuestionnaireStep5Page } from './pdss-questionnaire-step5.page';

describe('PdssQuestionnaireStep5Page', () => {
  let component: PdssQuestionnaireStep5Page;
  let fixture: ComponentFixture<PdssQuestionnaireStep5Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PdssQuestionnaireStep5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdssQuestionnaireStep5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
