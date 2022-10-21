import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ToastController } from '@ionic/angular';
import { messages } from 'src/messages';
import { NameValue } from 'src/collection';
import { SmdItemListItem } from '../../smd-widgets/smd-item-list/smd-item-list.component';

@Component({
  selector: 'app-pdss-questionnaire-step8',
  templateUrl: './pdss-questionnaire-step8.page.html',
  styleUrls: ['./pdss-questionnaire-step8.page.scss'],
})
export class PdssQuestionnaireStep8Page implements OnInit {

  items: SmdItemListItem[] = [
    {
      name: '두려움이나 회피행동이 없었음',
    },
    {
      name: '종종 두려움이나 회피가 있기는 하지만, 보통은 상황에 직면하거나 참을 수 있었음. 일상생활을 조정할 필요는 없었음',
    },
    {
      name: '현저한 불안이나 회피가 있으나 견딜만 했음',
      note: '(두려운 상황을 피하기는 했지만 누군가 함께 있으면 직면할 수 있었음, 일상생활에 약간의 조정이 필요하였음)',
    },
    {
      name: '광범위한 회피행동 때문에 일상적인 활동을 하기 어려웠고 일상생활에 많은 조정이 필요했음',
    },
    {
      name: '극심한 공포와 회피행동으로 일상생활에 광범위한 조정이 필요했고 중요한 일을 수행할 수 없었음',
    },
  ];
  selection;

  constructor(private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['pdss-questionnaire-step7']);
  }

  next() {
    this.router.navigate(['pdss-questionnaire-step9']);
  }

  get valid() {
    return !!this.selection;
  }

}
