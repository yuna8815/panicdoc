import { Component, OnInit } from '@angular/core';
import { SmdModalService } from 'src/app/00.component/smd-modal.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';
import { NameValue } from 'src/collection';
import { messages } from 'src/messages';

@Component({
  selector: 'program5-course3-step3',
  templateUrl: './program5-course3-step3.component.html',
  styleUrls: ['./program5-course3-step3.component.scss'],
})
export class Program5Course3Step3Component implements OnInit, StepBase {

  items: NameValue[] = [
    {
      name: '혼란스럽다',
    },
    {
      name: '답답하다',
    },
    {
      name: '불안하다',
    },
    {
      name: '불편하다',
    },
    {
      name: '무섭다',
    },
    {
      name: '비참하다',
    },
    {
      name: messages.Etc,
    },
  ];

  constructor(public smdModal: SmdModalService, public context: GlobalContextService) { }

  ngOnInit() {}

  nextDisabled = () => {
    if (!this.context.program5.course3.step3answer ||
      this.context.program5.course3.step3answer?.name.startsWith('[')) {
      return true;
    }
    return false;
  }
}
