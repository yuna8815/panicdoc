import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { NameValue } from 'src/collection';
import { DailyExposureTrainingRecord, PanicFactors } from 'src/smd-common';

@Injectable({
  providedIn: 'root'
})
export class GlobalContextService {

  currProgram = '1';

  program4 = {
    course2: {
      step7answer: { name: '[step7answer]' } as NameValue,
      step8answer: { name: '[step8answer]' } as NameValue,
      step10answer: { name: '[step10answer]' } as NameValue,
      step12answer: { name: '[step12answer]' } as NameValue,
      step13answer: { name: '[step13answer]' } as NameValue,
    },
    course3: {
      step3answer: null as string[],
    },
  }
  program5 = {
    course2: {
      step2answer: '[step2answer]',
      step3answer: '[step3answer]',
      step4answer: null as string[],
    },
    course3: {
      step2answer: { name: '[step2answer]' } as NameValue,
      step3answer: { name: '[step3answer]' } as NameValue,
      step4answer: null as string[],
      step6answer: null as string[],
    },
    course4: {
      step5answer: { name: '[step5answer]' } as NameValue,
    },
  }
  program6 = {
    course3: {
      step1answer: null as NameValue,
    }
  }
  program7 = {
    course3: {
      record: {} as DailyExposureTrainingRecord,
    }
  }
  p2_1 = {
    course1: {
      step1answer: { name: '[step1answer]' } as NameValue,
    },
  }
  p2_2 = {
    course2: {
      step3answer: { name: '[step3answer]' } as NameValue,
      step4answer: 0,
      step6answer: '[step6answer]',
    },
  }
  p5 = {
    course2: {
      step3answer_allNo: false,
    }
  }
  p7 = {
    course1: {
      step1answer: { name: '[step1answer]' } as NameValue,
    },
  }

  myPanicFactors = _.clone(PanicFactors)

  public get panicFactorsCount() {
    return Object.values(this.myPanicFactors).reduce((count: number, curr: any) => count + (curr ? 1 : 0), 0);
  }

  constructor(private router: Router) {

    // 나의 공황 촉발 요인 더미값.
    this.myPanicFactors['버스를 이용할 때'] = true;
    this.myPanicFactors['엘리베이터를 탔을 때'] = true;
    this.myPanicFactors['샤워, 목욕 또는 사우나 갔을 때'] = true;
    this.myPanicFactors['커피 마실 때'] = true;
    this.myPanicFactors['회의나 모임에 참여했을 때'] = true;

  }

  gotoHome() {
    this.router.navigate(['/home'], { queryParams: { program: this.currProgram } });
  }
}
