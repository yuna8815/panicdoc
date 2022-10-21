import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { GlobalContextService } from 'src/app/global-context.service';
import { SmdReorderComponent } from 'src/app/smd-widgets/smd-reorder/smd-reorder.component';

@Component({
  selector: 'program4-course3-step3',
  templateUrl: './program4-course3-step3.component.html',
  styleUrls: ['./program4-course3-step3.component.scss'],
})
export class Program4Course3Step3Component implements OnInit {

  items = ["신체감각", "생각", "행동"];

  @ViewChild(SmdReorderComponent, { static: true }) reorder: SmdReorderComponent;

  constructor(public context: GlobalContextService) { }

  ngOnInit() {}

  next = () => {
    this.context.program4.course3.step3answer = _.cloneDeep(this.reorder.items);
    return true;
  }
}
