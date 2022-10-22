import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';
import { NameValue } from 'src/collection';

@Component({
  selector: 'program4-course2-step7',
  templateUrl: './program4-course2-step7.component.html',
  styleUrls: ['./program4-course2-step7.component.scss'],
})
export class Program4Course2Step7Component implements OnInit, StepBase {

  items: NameValue[] = [
    {
      name: '나는 무서워',
    },
    {
      name: '나는 불안해',
    },
    {
      name: '나는 두려워',
    },
    {
      name: '나는 긴장돼',
    },
  ];

  constructor(public context: GlobalContextService) { }

  ngOnInit() {}

  nextDisabled = () => {
    if (!this.context.program4.course2.step7answer ||
      this.context.program4.course2.step7answer?.name.startsWith('[')) {
      return true;
    }
    return false;
  }
}
