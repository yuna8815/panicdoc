import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ToastController } from '@ionic/angular';
import { messages } from 'src/messages';
import { NameValue } from 'src/collection';
import { SmdItemListItem } from '../../smd-widgets/smd-item-list/smd-item-list.component';

@Component({
  selector: 'app-pdss-questionnaire-step11',
  templateUrl: './pdss-questionnaire-step11.page.html',
  styleUrls: ['./pdss-questionnaire-step11.page.scss'],
})
export class PdssQuestionnaireStep11Page implements OnInit {

  items: SmdItemListItem[] = [
    {
      name: '전혀 방해받지 않았음',
    },
    {
      name: '약간 방해받았으나 거의 모든 일을 평소대로 수행하였음',
    },
    {
      name: '사회활동에 현저하게 방해를 받았으나 노력하여 모든 일을 수행할 수 있었음',
    },
    {
      name: '사회활동에 상당한 방해와 지장이 있어서 중요한 사회활동을 할 수 없었음',
    },
    {
      name: '공황증상 때문에 어떠한 사회활동도 전혀 할 수 없었음',
    },
  ];
  selection;

  constructor(private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['pdss-questionnaire-step10']);
  }

  next() {
    this.router.navigate(['pdss-questionnaire-result']);
  }

  get valid() {
    return !!this.selection;
  }

}
