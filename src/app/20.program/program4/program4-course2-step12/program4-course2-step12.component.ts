import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';
import { NameValue } from 'src/collection';

@Component({
  selector: 'program4-course2-step12',
  templateUrl: './program4-course2-step12.component.html',
  styleUrls: ['./program4-course2-step12.component.scss'],
})
export class Program4Course2Step12Component implements OnInit, StepBase {

  items: NameValue[] = [
    {
      name: '숨이 찬 증상은 이전에 겪었던 공황증상이지 위험한 병은 아니야.',
    },
    {
      name: '고통스럽지만 실제 쓰러지거나 위험해질 가능성은 거의 없어',
    },
    {
      name: '힘들지만 시간이 지나면 지나갈 거야',
    },
    {
      name: '숨이 차지만 내가 호흡을 조절할 수 있어',
    },
  ];

  constructor(public context: GlobalContextService) { }

  ngOnInit() {}

  nextDisabled = () => {
    if (!this.context.program4.course2.step12answer ||
      this.context.program4.course2.step12answer?.name.startsWith('[')) {
      return true;
    }
    return false;
  }
}
