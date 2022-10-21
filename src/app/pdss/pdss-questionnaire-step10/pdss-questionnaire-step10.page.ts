import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ToastController } from '@ionic/angular';
import { messages } from 'src/messages';
import { NameValue } from 'src/collection';
import { SmdItemListItem } from '../../smd-widgets/smd-item-list/smd-item-list.component';

@Component({
  selector: 'app-pdss-questionnaire-step10',
  templateUrl: './pdss-questionnaire-step10.page.html',
  styleUrls: ['./pdss-questionnaire-step10.page.scss'],
})
export class PdssQuestionnaireStep10Page implements OnInit {

  items: SmdItemListItem[] = [
    {
      name: '전혀 방해받지 않았음',
    },
    {
      name: '약간 방해받았으나 거의 모든 일을 평소대로 수행하였음',
    },
    {
      name: '현저하게 방해를 받았으나 여전히 해야 할 일을 할 수 있었음',
    },
    {
      name: '업무 수행에 상당한 방해와 지장이 있어서 중요한 일들을 할 수 없었음',
    },
    {
      name: '공황증상 때문에 집안 일이나 직장에서의 업무수행을 전혀 할 수 없었음',
    },
  ];
  selection;

  constructor(private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['pdss-questionnaire-step9']);
  }

  next() {
    this.router.navigate(['pdss-questionnaire-step11']);
  }

  get valid() {
    return !!this.selection;
  }

}
