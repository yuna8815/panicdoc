import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ToastController } from '@ionic/angular';
import { messages } from 'src/messages';

@Component({
  selector: 'app-pdss-questionnaire-step3',
  templateUrl: './pdss-questionnaire-step3.page.html',
  styleUrls: ['./pdss-questionnaire-step3.page.scss'],
})
export class PdssQuestionnaireStep3Page implements OnInit {

  count = 0;

  constructor(private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['pdss-questionnaire-step2']);
  }

  next() {
    this.router.navigate(['pdss-questionnaire-step4']);
  }

}
