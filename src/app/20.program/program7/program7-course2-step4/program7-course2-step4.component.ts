import { Component, OnInit } from '@angular/core';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'program7-course2-step4',
  templateUrl: './program7-course2-step4.component.html',
  styleUrls: ['./program7-course2-step4.component.scss'],
})
export class Program7Course2Step4Component implements OnInit, StepBase {

  constructor() { }

  ngOnInit() {}

  getButtonText = () => {
    return '프로그램 완료';
  }
}
