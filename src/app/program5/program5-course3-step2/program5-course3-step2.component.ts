import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/global-context.service';
import { SmdModalService } from 'src/app/smd-widgets/smd-modal.service';
import { StepBase } from 'src/app/step-base';
import { NameValue } from 'src/collection';
import { messages } from 'src/messages';

@Component({
  selector: 'program5-course3-step2',
  templateUrl: './program5-course3-step2.component.html',
  styleUrls: ['./program5-course3-step2.component.scss'],
})
export class Program5Course3Step2Component implements OnInit, StepBase {

  items: NameValue[] = [
    {
      name: '숨을 못 쉬겠다, 아무것도 할 수 없다',
    },
    {
      name: '사람들이 쳐다보는 것 같다',
    },
    {
      name: '심장이 멈출 것 같고 토할 것 같다',
    },
    {
      name: '발표를 망칠 것 같다',
    },
    {
      name: '나가버리고 싶지만, 다들 이상하게 볼 것 같다',
    },
    {
      name: messages.Etc,
    },
  ];

  constructor(public smdModal: SmdModalService, public context: GlobalContextService) { }

  ngOnInit() {}

  nextDisabled = () => {
    if (!this.context.program5.course3.step2answer ||
      this.context.program5.course3.step2answer?.name.startsWith('[')) {
      return true;
    }
    return false;
  }
}
