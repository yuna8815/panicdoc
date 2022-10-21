import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { GlobalContextService } from 'src/app/global-context.service';
import { SmdReorderComponent } from 'src/app/smd-widgets/smd-reorder/smd-reorder.component';

export const DistortionEventOptions = [
  '갓길에 차를 세워 놓고<br />불안이 사라질 때까지 기다린다',
  '심호흡을 하는 사이<br />증상이 잦아든다',
  '기절해서 옆 차를 들이받는다',
  '갑자기 핸들을 꺾어 가드레일을<br />들이받는다',
  '창문을 열고 노래를 부르면서<br />지나간다',
];

@Component({
  selector: 'program5-course2-step4',
  templateUrl: './program5-course2-step4.component.html',
  styleUrls: ['./program5-course2-step4.component.scss'],
})
export class Program5Course2Step4Component implements OnInit {

  items = [...DistortionEventOptions];

  @ViewChild(SmdReorderComponent, { static: true }) reorder: SmdReorderComponent;

  constructor(public context: GlobalContextService) { }

  ngOnInit() {}

  next = () => {
    this.context.program5.course2.step4answer = _.cloneDeep(this.reorder.items);
    return true;
  }
}
