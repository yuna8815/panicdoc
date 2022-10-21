import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';
import { NameValue } from 'src/collection';

@Component({
  selector: 'program6-course3-step1',
  templateUrl: './program6-course3-step1.component.html',
  styleUrls: ['./program6-course3-step1.component.scss'],
})
export class Program6Course3Step1Component implements OnInit, StepBase {

  items: NameValue[] = [
    {
      name: '빨대로 숨쉬기',
    },
    {
      name: '회전하기',
    },
    {
      name: '제자리 뛰기',
    },
    {
      name: '머리 숙였다 들기',
    },
    {
      name: '머리 흔들기',
    },
  ];

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

  nextDisabled = () => {
    if (!this.context.program6.course3.step1answer ||
      this.context.program6.course3.step1answer?.name.startsWith('[')) {
      return true;
    }
    return false;
  }
}
