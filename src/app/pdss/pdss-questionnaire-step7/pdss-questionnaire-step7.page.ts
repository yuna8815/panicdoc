import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ToastController } from '@ionic/angular';
import { messages } from 'src/messages';
import { NameValue } from 'src/collection';
import { SmdItemListItem } from '../../smd-widgets/smd-item-list/smd-item-list.component';

@Component({
  selector: 'app-pdss-questionnaire-step7',
  templateUrl: './pdss-questionnaire-step7.page.html',
  styleUrls: ['./pdss-questionnaire-step7.page.scss'],
})
export class PdssQuestionnaireStep7Page implements OnInit {

  items: SmdItemListItem[] = [
    {
      name: '전혀 걱정하지 않았음',
    },
    {
      name: '가끔 걱정하였음',
    },
    {
      name: '자주 걱정하였음',
    },
    {
      name: '매우 걱정하여 일상생활에 방해가 될 정도였음',
    },
    {
      name: '계속 심하게 걱정하여 아무 것도 할 수 없었음',
    },
  ];
  selection;

  constructor(private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['pdss-questionnaire-step6']);
  }

  next() {
    this.router.navigate(['pdss-questionnaire-step8']);
  }

  get valid() {
    return !!this.selection;
  }

}
