import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ToastController } from '@ionic/angular';
import { messages } from 'src/messages';
import { NameValue } from 'src/collection';

@Component({
  selector: 'app-pdss-questionnaire-step5',
  templateUrl: './pdss-questionnaire-step5.page.html',
  styleUrls: ['./pdss-questionnaire-step5.page.scss'],
})
export class PdssQuestionnaireStep5Page implements OnInit {

  items: NameValue[] = [
    {
      name: '공황발작이나 공황증상이 없었음',
    },
    {
      name: '공황발작은 없었으나 공황증상은 하루 1회 경험하였음',
    },
    {
      name: '공황발작은 주 1 ~ 2회지만, 공황증상은 하루에도 여러 번 경험하였음',
    },
    {
      name: '완전한 공황 발작은 주 3회 이상 일어나지만, 일주일 평균 하루에 1회 이상은 아님',
    },
    {
      name: '하루에도 여러 번 공황발작이 일어나 발작이 없는 날보다 있는 날이 더 많았음',
    },
  ];
  selection;

  constructor(private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['pdss-questionnaire-step4']);
  }

  next() {
    this.router.navigate(['pdss-questionnaire-step6']);
  }

  get valid() {
    return !!this.selection;
  }

}
