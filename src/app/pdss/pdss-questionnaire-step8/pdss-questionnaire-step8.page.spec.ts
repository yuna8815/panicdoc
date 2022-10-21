import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdssQuestionnaireStep8Page } from './pdss-questionnaire-step8.page';

describe('PdssQuestionnaireStep8Page', () => {
  let component: PdssQuestionnaireStep8Page;
  let fixture: ComponentFixture<PdssQuestionnaireStep8Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PdssQuestionnaireStep8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdssQuestionnaireStep8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
