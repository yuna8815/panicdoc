import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';
import { NameValue } from 'src/collection';

@Component({
  selector: 'program4-course2-step8',
  templateUrl: './program4-course2-step8.component.html',
  styleUrls: ['./program4-course2-step8.component.scss'],
})
export class Program4Course2Step8Component implements OnInit, StepBase {

  items: NameValue[] = [
    {
      name: '숨이 막혀서 기절하거나 쓰러질 것 같다',
    },
    {
      name: '심장이 마비될 것 같다',
    },
    {
      name: '갑자기 죽어버릴 것 같다',
    },
    {
      name: '이러다 미쳐버릴 것 같다',
    },
  ];

  constructor(public context: GlobalContextService) { }

  ngOnInit() {}

  nextDisabled = () => {
    if (!this.context.program4.course2.step8answer ||
      this.context.program4.course2.step8answer?.name.startsWith('[')) {
      return true;
    }
    return false;
  }
}
