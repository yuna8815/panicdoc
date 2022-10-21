import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as _ from 'lodash';
import { messages } from 'src/messages';
import { PanicFactors } from 'src/smd-common';
import { SmdModalService } from '../smd-widgets/smd-modal.service';

@Component({
  selector: 'app-user-info-input',
  templateUrl: './user-info-input.page.html',
  styleUrls: ['./user-info-input.page.scss'],
})
export class UserInfoInputPage implements OnInit {

  home = 1;
  step = 1;
  checked = _.clone(PanicFactors);
  situations;
  situationText = '';
  etcInfoText = '';

  count = 0;
  messages = messages;

  constructor(private route: ActivatedRoute, private router: Router, private toastController: ToastController,
    private smdModal: SmdModalService) {
    this.situations = Object.keys(this.checked);
  }

  ngOnInit() {
  }

  back() {
  }

  async next() {
    if (this.step == 1) {
      if (this.checked[messages.Etc]) {
        this.step++;
        return;
      }
    } else {
      if (!this.situationText) {
        const toast = await this.toastController.create({
          message: messages.PleaseInputCorrectText,
          duration: 2000,
          position: 'bottom',
          cssClass: 'toast-y-up100px',
          color: 'dark',
        });
        toast.present();
        return;
      } else {
        this.step = 1;
      }
    }
    this.smdModal.alert({
      title: '검사 완료',
      message: '모든 검사와 입력을 완료하였습니다. <br />지금부터 PanicDoc 사용법을 배워보세요.',
      onOkCallback: () => {
        this.router.navigateByUrl(`/home?program=${this.home}`);
      }
    });
  }

  // 선택한 개수
  public get checkedCount() {
    return Object.values(this.checked).reduce((count: number, curr: any) => count + (curr ? 1 : 0), 0);
  }

}
