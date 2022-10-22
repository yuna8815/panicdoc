import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';
import { NameValue } from 'src/collection';

@Component({
  selector: 'program4-course2-step13',
  templateUrl: './program4-course2-step13.component.html',
  styleUrls: ['./program4-course2-step13.component.scss'],
})
export class Program4Course2Step13Component implements OnInit, StepBase {

  items: NameValue[] = [
    {
      name: '불안하지만 견딜 수 있어',
    },
    {
      name: '힘들지만 두렵지는 않아',
    },
    {
      name: '차츰 편안하게 될 거야',
    },
    {
      name: '안심이 돼',
    },
    {
      name: '여전히 불안하고 변화가 없어',
    },
  ];

  constructor(public context: GlobalContextService) { }

  ngOnInit() {}

  nextDisabled = () => {
    if (!this.context.program4.course2.step13answer ||
      this.context.program4.course2.step13answer?.name.startsWith('[')) {
      return true;
    }
    return false;
  }
}
