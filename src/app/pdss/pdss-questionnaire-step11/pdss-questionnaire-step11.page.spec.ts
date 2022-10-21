import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdssQuestionnaireStep11Page } from './pdss-questionnaire-step11.page';

describe('PdssQuestionnaireStep11Page', () => {
  let component: PdssQuestionnaireStep11Page;
  let fixture: ComponentFixture<PdssQuestionnaireStep11Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PdssQuestionnaireStep11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdssQuestionnaireStep11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
