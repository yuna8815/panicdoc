import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';
import { GradeLabels2 } from 'src/smd-common';

@Component({
  selector: 'program7-course3-step3',
  templateUrl: './program7-course3-step3.component.html',
  styleUrls: ['./program7-course3-step3.component.scss'],
})
export class Program7Course3Step3Component implements OnInit, StepBase {

  planAchieve = 0;
  beforeFear: number;
  afterFear: number;

  GradeLabels2 = GradeLabels2;

  constructor(public context: GlobalContextService) { }

  ngOnInit() {}

  next = () => {
    this.context.program7.course3.record.beforeFearLevel = this.beforeFear;
    this.context.program7.course3.record.afterFearLevel = this.afterFear;
    return true;
  }

}
