import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { SmdModalService } from 'src/app/00.component/smd-modal.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';
import { DailyTrainingCompleteMessages } from 'src/smd-common';

@Component({
  selector: 'program7-course3-step5',
  templateUrl: './program7-course3-step5.component.html',
  styleUrls: ['./program7-course3-step5.component.scss'],
})
export class Program7Course3Step5Component implements OnInit, StepBase {

  curr = 0;
  showAgain = false;
  message;

  DailyTrainingCompleteMessages = DailyTrainingCompleteMessages;

  constructor(public route: ActivatedRoute, private router: Router, public smdModal: SmdModalService, public context: GlobalContextService) {
  }

  ngOnInit() {
    if (this.context.program7.course3.record.afterFearLevel >= 7) {
      this.message = DailyTrainingCompleteMessages.step1[1];
      this.showAgain = true;
      this.top = () => {
      };
      console.log('top set');
    } else {
      this.message = DailyTrainingCompleteMessages.step1[0];
      this.showAgain = false;
      this.top = undefined;
      console.log('top reset');
    }

  }

  // top을 설정하지 않으면 '다시 2단계 훈련을 진행하겠습니다.' 미표시
  top?;
  topButtonText = () => {
    return '다시 1단계 훈련을 진행하겠습니다.';
  }

  next = () => {
    this.smdModal.confirm({
      title: '훈련 완료',
      message: '훈련기록을 3회 이상 기록하였기에<br />프로그램은 완료되었습니다.<br />계속하여 훈련은 진행할 수 있습니다.<br />훈련후에 훈련기록을 작성해 주세요.'
    });
    return true;
  }

  getButtonText = () => {
    if (this.showAgain) {
      return '2단계 훈련을 진행하겠습니다.';
    } else {
      return '완료';
    }
  }

}
