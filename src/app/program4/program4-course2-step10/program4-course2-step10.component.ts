import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';
import { NameValue } from 'src/collection';

@Component({
  selector: 'program4-course2-step10',
  templateUrl: './program4-course2-step10.component.html',
  styleUrls: ['./program4-course2-step10.component.scss'],
})
export class Program4Course2Step10Component implements OnInit, StepBase {

  items: NameValue[] = [
    {
      name: '0번',
      value: 0,
    },
    {
      name: '1-9번',
      value: 1,
    },
    {
      name: '10-19번',
      value: 10,
    },
    {
      name: '20번 이상',
      value: 20,
    },
  ];

  constructor(public context: GlobalContextService) { }

  ngOnInit() {}

  nextDisabled = () => {
    if (!this.context.program4.course2.step10answer ||
      this.context.program4.course2.step10answer?.name.startsWith('[')) {
      return true;
    }
    return false;
  }
}
