import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ToastController } from '@ionic/angular';
import { messages } from 'src/messages';
import { TimeFormat_yyyyMMdd, TimeFormat_yyyyMMdd_e } from 'src/smd-common';
import * as moment from 'moment';

@Component({
  selector: 'app-pdss-questionnaire-step2',
  templateUrl: './pdss-questionnaire-step2.page.html',
  styleUrls: ['./pdss-questionnaire-step2.page.scss'],
})
export class PdssQuestionnaireStep2Page implements OnInit {

  firstSeizureDate = new Date();
  recentSeizureDate = new Date();
  firstOrRecentSeizure = true;
  date: Date = new Date();
  datePicked: moment.Moment;
  h1 = 1;
  h2 = 1;

  TimeFormat_yyyyMMdd = TimeFormat_yyyyMMdd;
  TimeFormat_yyyyMMdd_e = TimeFormat_yyyyMMdd_e;

  @ViewChild(IonModal) modal: IonModal;

  constructor(private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
    this.h1 = 335 / document.documentElement.scrollHeight;
    this.h2 = 480 / document.documentElement.scrollHeight;
  }

  back() {
    this.router.navigate(['pdss-questionnaire-step1']);
  }

  pickFirstSeizureDate() {
    this.firstOrRecentSeizure = true;
    this.modal.present();
  }

  pickRecentSeizureDate() {
    this.firstOrRecentSeizure = false;
    this.modal.present();
  }

  next() {
    this.modal.dismiss();
    this.router.navigate(['pdss-questionnaire-step3']);
  }

  onDateChange($event) {
    const date = $event.detail.value;
    this.datePicked = moment(date);
  }

  selectDate() {
    if (this.firstOrRecentSeizure) {
      this.firstSeizureDate = this.datePicked.toDate();
    } else {
      this.recentSeizureDate = this.datePicked.toDate();
    }
    this.modal.dismiss();
  }
}
