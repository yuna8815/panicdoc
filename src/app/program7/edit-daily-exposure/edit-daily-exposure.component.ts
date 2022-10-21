import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SmdModalService } from 'src/app/smd-widgets/smd-modal.service';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'edit-daily-exposure',
  templateUrl: './edit-daily-exposure.component.html',
  styleUrls: ['./edit-daily-exposure.component.scss'],
})
export class EditDailyExposureComponent implements OnInit, StepBase {

  constructor(public smdModal: SmdModalService, private router: Router, private toastController: ToastController) {}

  ngOnInit() {}

  next = () => {
    this.showAlert();
    this.router.navigateByUrl('/program7/course3/1');
    return false;
  }

  async showAlert() {
    const toast = await this.toastController.create({
      message: '1, 2, 3단계 훈련방법을 모두 입력해 주세요.',
      duration: 2000,
      position: 'bottom',
      cssClass: 'toast-y-up100px',
      color: 'dark',
    });
    toast.present();
  }

  getButtonText = () => {
    return '수정 완료';
  }
}
