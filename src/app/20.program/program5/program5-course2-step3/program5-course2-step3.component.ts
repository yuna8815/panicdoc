import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SmdModalService } from 'src/app/00.component/smd-modal.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';
import { NameValue } from 'src/collection';
import { messages } from 'src/messages';

@Component({
  selector: 'program5-course2-step3',
  templateUrl: './program5-course2-step3.component.html',
  styleUrls: ['./program5-course2-step3.component.scss'],
})
export class Program5Course2Step3Component implements OnInit, StepBase {

  items: NameValue[] = [
    {
      name: '불안하다',
    },
    {
      name: '불편하다',
    },
    {
      name: '무섭다',
    },
    {
      name: '짜증이 난다',
    },
    {
      name: '외롭다',
    },
    {
      name: '우울하다',
    },
    {
      name: messages.Etc,
    },
  ];
  answer: NameValue = {};
  input = '';

  messages = messages;

  constructor(public smdModal: SmdModalService, public context: GlobalContextService, private toastController: ToastController) {}

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
    this.context.program5.course2.step3answer =
      (this.answer.name == messages.Etc ? this.input : this.answer.name);
    return true;
  }

}
