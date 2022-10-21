import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';
import { NameValue } from 'src/collection';
import { messages } from 'src/messages';

@Component({
  selector: 'program5-course2-step2',
  templateUrl: './program5-course2-step2.component.html',
  styleUrls: ['./program5-course2-step2.component.scss'],
})
export class Program5Course2Step2Component implements OnInit, StepBase {

  items: NameValue[] = [
    {
      name: '기절해서 옆 차와 부딪힐 것 같다',
    },
    {
      name: '심장마비로 죽을 것 같다',
    },
    {
      name: '내 몸의 통제력을 잃고 사고를 낼 것 같다',
    },
    {
      name: '점차 숨이 막혀 오고 심해질 것이다',
    },
    {
      name: '괜히 혼자 운전을 했다',
    },
    {
      name: messages.Etc,
    },
  ];
  answer: NameValue = {};
  input = '';

  messages = messages;

  constructor(public context: GlobalContextService, private toastController: ToastController) {}

  ngOnInit() {}

  nextDisabled = () => {
    if (!this.answer?.name) {
      return true;
    }
    return false;
  }

  clickOnDisabled = async () => {
    const toast = await this.toastController.create({
      message: messages.PleaseComplete,
      duration: 2000,
      position: 'bottom',
      cssClass: 'toast-y-up100px',
      color: 'dark',
    });
    toast.present();
  }

  next = () => {
    this.context.program5.course2.step2answer =
      (this.answer.name == messages.Etc ? this.input : this.answer.name);
    return true;
  }

}
