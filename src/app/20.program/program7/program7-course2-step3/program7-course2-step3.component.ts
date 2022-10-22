import { Component, OnInit, ViewChild } from '@angular/core';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'program7-course2-step3',
  templateUrl: './program7-course2-step3.component.html',
  styleUrls: ['./program7-course2-step3.component.scss'],
})
export class Program7Course2Step3Component implements OnInit, StepBase {

  constructor() {
  }

  ngOnInit() {}

  getButtonText = () => {
    return '노출훈련 계획 완료';
  }
}
