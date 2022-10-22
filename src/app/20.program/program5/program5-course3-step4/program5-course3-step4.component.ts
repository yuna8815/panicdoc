import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { SmdReorderComponent } from 'src/app/00.component/smd-reorder/smd-reorder.component';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';

export const DistortionEvent2Options = [
  '기절해서 병원에 실려간다',
  '숨을 몰아쉬다가<br />의견 발표 기회를 놓친다',
  '숨막힘을 참지 못하고<br />회의실에서 먼저 나간다',
  '찬물을 한 잔 마시고<br />진정이 된다',
];

@Component({
  selector: 'program5-course3-step4',
  templateUrl: './program5-course3-step4.component.html',
  styleUrls: ['./program5-course3-step4.component.scss'],
})
export class Program5Course3Step4Component implements OnInit, StepBase {

  items = [...DistortionEvent2Options];

  @ViewChild(SmdReorderComponent, { static: true }) reorder: SmdReorderComponent;

  constructor(public context: GlobalContextService) { }

  ngOnInit() {
  }

  nextDisabled = () => {
    return false;
  }

  next = () => {
    this.context.program5.course3.step4answer = _.cloneDeep(this.reorder.items);
    return true;
  }
}
