import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ToastController } from '@ionic/angular';
import { messages } from 'src/messages';
import { NameValue } from 'src/collection';

@Component({
  selector: 'app-pdss-questionnaire-step4',
  templateUrl: './pdss-questionnaire-step4.page.html',
  styleUrls: ['./pdss-questionnaire-step4.page.scss'],
})
export class PdssQuestionnaireStep4Page implements OnInit {

  items: NameValue[] = [
    {
      name: '10분 이내',
      value: 10,
    },
    {
      name: '10 ~ 30분 이내',
      value: 30,
    },
    {
      name: '30 ~ 60분 이내',
      value: 60,
    },
    {
      name: '60분 이상',
      value: 61,
    },
  ];
  selection;

  constructor(private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['pdss-questionnaire-step3']);
  }

  next() {
    this.router.navigate(['pdss-questionnaire-step5']);
  }

  get valid() {
    return !!this.selection;
  }

}
