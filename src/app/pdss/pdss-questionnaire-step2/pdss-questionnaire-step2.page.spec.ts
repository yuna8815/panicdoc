import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdssQuestionnaireStep2Page } from './pdss-questionnaire-step2.page';

describe('PdssQuestionnaireStep2Page', () => {
  let component: PdssQuestionnaireStep2Page;
  let fixture: ComponentFixture<PdssQuestionnaireStep2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PdssQuestionnaireStep2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdssQuestionnaireStep2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
