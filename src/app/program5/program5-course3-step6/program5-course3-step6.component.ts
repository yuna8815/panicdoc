import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { SmdReorderComponent } from 'src/app/00.component/smd-reorder/smd-reorder.component';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';

export const DistortionEvent3Options = [
  '오늘 A씨가 컨디션이 좀 안 좋아<br />보이네. 괜찮은지 물어볼까?',
  '회의 준비를 하지 않아서 저러는 건가,<br />무능력한 직원이야',
  '힘들어하는 것 같은데<br />잠깐 회의를 쉬자고 할까?',
  '공황증상 같은데 그런 사람과<br />같이 일하기는 어렵지 않나',
];

@Component({
  selector: 'program5-course3-step6',
  templateUrl: './program5-course3-step6.component.html',
  styleUrls: ['./program5-course3-step6.component.scss'],
})
export class Program5Course3Step6Component implements OnInit, StepBase {

  items = [...DistortionEvent3Options];

  @ViewChild(SmdReorderComponent, { static: true }) reorder: SmdReorderComponent;

  constructor(public context: GlobalContextService) { }

  ngOnInit() {}

  nextDisabled = () => {
    return false;
  }

  next = () => {
    this.context.program5.course3.step6answer = _.cloneDeep(this.reorder.items);
    return true;
  }
}
