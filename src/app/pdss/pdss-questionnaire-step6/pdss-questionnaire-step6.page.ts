import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ToastController } from '@ionic/angular';
import { messages } from 'src/messages';
import { NameValue } from 'src/collection';
import { SmdItemListItem } from '../../smd-widgets/smd-item-list/smd-item-list.component';

@Component({
  selector: 'app-pdss-questionnaire-step6',
  templateUrl: './pdss-questionnaire-step6.page.html',
  styleUrls: ['./pdss-questionnaire-step6.page.scss'],
})
export class PdssQuestionnaireStep6Page implements OnInit {

  items: SmdItemListItem[] = [
    {
      name: '공황발작이나 공황증상이 없었음',
      note: '(있어도 고통스럽지 않았음)',
    },
    {
      name: '고통을 약하게 느낌',
      note: '(그다지 강하지 않았음)',
    },
    {
      name: '고통을 어느 정도 느낌',
      note: '(강하긴 했지만 견딜만 했음)',
    },
    {
      name: '고통을 심하게 느낌',
      note: '(매우 강했음)',
    },
    {
      name: '고통을 극심하게 느낌',
      note: '(심하게 고통스러웠음)',
    },
  ];
  selection;

  constructor(private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['pdss-questionnaire-step5']);
  }

  next() {
    this.router.navigate(['pdss-questionnaire-step7']);
  }

  get valid() {
    return !!this.selection;
  }

}
