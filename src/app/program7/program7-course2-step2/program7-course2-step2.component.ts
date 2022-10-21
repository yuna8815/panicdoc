import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'program7-course2-step2',
  templateUrl: './program7-course2-step2.component.html',
  styleUrls: ['./program7-course2-step2.component.scss'],
})
export class Program7Course2Step2Component implements OnInit, StepBase {

  constructor(public auth: AuthService) {
  }

  ngOnInit() {}

  front = () => {
  }

  getButtonText = () => {
    return '맞춤형 훈련 진행';
  }
}
