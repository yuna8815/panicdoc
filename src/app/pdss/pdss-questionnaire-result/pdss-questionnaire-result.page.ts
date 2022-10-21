import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ToastController } from '@ionic/angular';
import { messages } from 'src/messages';
import { NameValue } from 'src/collection';

@Component({
  selector: 'app-pdss-questionnaire-result',
  templateUrl: './pdss-questionnaire-result.page.html',
  styleUrls: ['./pdss-questionnaire-result.page.scss'],
})
export class PdssQuestionnaireResultPage implements OnInit {

  constructor(private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['/appq-intro']);
  }
}
