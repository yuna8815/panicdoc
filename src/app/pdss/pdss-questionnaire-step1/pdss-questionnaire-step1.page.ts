import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { messages } from 'src/messages';
import { Symptoms } from 'src/smd-common';

@Component({
  selector: 'app-pdss-questionnaire-step1',
  templateUrl: './pdss-questionnaire-step1.page.html',
  styleUrls: ['./pdss-questionnaire-step1.page.scss'],
})
export class PdssQuestionnaireStep1Page implements OnInit {

  checked = Symptoms.reduce((obj, s) => { obj[s] = false; return obj; }, {});
  symptoms;

  constructor(private router: Router, private toastController: ToastController) {
    this.symptoms = Object.keys(this.checked);
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['pdss-questionnaire']);
  }

  async next() {
    console.log(Object.values(this.checked));
    if (!Object.values(this.checked).some(v => v)) {
      const toast = await this.toastController.create({
        message: messages.PleaseChooseAtLeastOne,
        duration: 2000,
        position: 'bottom',
        cssClass: 'toast-y-up100px',
        color: 'dark',
      });
      toast.present();
      return;
    }

    this.router.navigate(['pdss-questionnaire-step2']);
  }

  // 선택한 개수
  public get checkedCount() {
    return Object.values(this.checked).reduce((count: number, curr: any) => count + (curr ? 1 : 0), 0);
  }

}
