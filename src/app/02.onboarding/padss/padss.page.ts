import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ToastController } from '@ionic/angular';
import { messages } from 'src/messages';
import { Symptoms, TimeFormat_yyyyMMdd, TimeFormat_yyyyMMdd_e } from 'src/smd-common';
import * as moment from 'moment';
import { NameValue } from 'src/collection';
import { SmdItemListItem } from 'src/app/00.component/smd-item-list/smd-item-list.component';

@Component({
  selector: 'app-padss',
  templateUrl: './padss.page.html',
  styleUrls: ['./padss.page.scss'],
})
export class PadssPage implements OnInit {

  checked = Symptoms.reduce((obj, s) => { obj[s] = false; return obj; }, {});
  symptoms;

  firstSeizureDate = new Date();
  recentSeizureDate = new Date();
  firstOrRecentSeizure = true;
  date: Date = new Date();
  datePicked: moment.Moment;
  h1 = 1;
  h2 = 1;

  TimeFormat_yyyyMMdd = TimeFormat_yyyyMMdd;
  TimeFormat_yyyyMMdd_e = TimeFormat_yyyyMMdd_e;

  count = 0;

  items: NameValue[] = [
    {
      name: '10분 이내',
      value: 10,
    },
    {
      name: '10 ~ 30분 이내',
      value: 30,
    },
    {
      name: '30 ~ 60분 이내',
      value: 60,
    },
    {
      name: '60분 이상',
      value: 61,
    },
  ];
  items2: NameValue[] = [
    {
      name: '공황발작이나 공황증상이 없었음',
    },
    {
      name: '공황발작은 없었으나 공황증상은 하루 1회 경험하였음',
    },
    {
      name: '공황발작은 주 1 ~ 2회지만, 공황증상은 하루에도 여러 번 경험하였음',
    },
    {
      name: '완전한 공황 발작은 주 3회 이상 일어나지만, 일주일 평균 하루에 1회 이상은 아님',
    },
    {
      name: '하루에도 여러 번 공황발작이 일어나 발작이 없는 날보다 있는 날이 더 많았음',
    },
  ];
  items3: SmdItemListItem[] = [
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
  items4: SmdItemListItem[] = [
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
  items5: SmdItemListItem[] = [
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
  items6: SmdItemListItem[] = [
    {
      name: '신체증상을 유발하는 상황이나 활동을 피하거나 두려워한 적이 없었음',
    },
    {
      name: '종종 두려움이나 회피가 있기는 하지만, 보통은 상황에 직면하거나 참을 수 있었음. 일상생활을 조정할 필요는 없었음',
    },
    {
      name: '현저한 회피행동을 하였으나 견딜만 함. 일상생활에 약간의 조정이 필요했지만 지장은 없었음',
    },
    {
      name: '광범위한 회피행동 때문에 일상적인 활동을 하기 어려웠고 일상생활에 많은 조정이 필요했음',
    },
    {
      name: '전반적이고 무력하게 만드는 회피행동으로 일상생활에 광범위한 조정이 필요했고 중요한 일을 수행할 수 없었음',
    },
  ];
  items7: SmdItemListItem[] = [
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
  items8: SmdItemListItem[] = [
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

  @ViewChild(IonModal) modal: IonModal;

  constructor(
    private toastController: ToastController
  ) {
    this.symptoms = Object.keys(this.checked);
  }

  ngOnInit() {
    this.h1 = 335 / document.documentElement.scrollHeight;
    this.h2 = 480 / document.documentElement.scrollHeight;
  }

  async next() {
    console.log(Object.values(this.checked));
    if (!Object.values(this.checked).some(v => v)) {
      const toast = await this.toastController.create({
        message: messages.PleaseChooseAtLeastOne,
        duration: 2000,
        position: 'bottom',
        cssClass: 'toast-y-up100px',
        color: 'dark',
      });
      toast.present();
      return;
    }

    // this.router.navigate(['pdss-questionnaire-step2']);
  }

  pickFirstSeizureDate() {
    this.firstOrRecentSeizure = true;
    this.modal.present();
  }

  pickRecentSeizureDate() {
    this.firstOrRecentSeizure = false;
    this.modal.present();
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

  // 선택한 개수
  public get checkedCount() {
    return Object.values(this.checked).reduce((count: number, curr: any) => count + (curr ? 1 : 0), 0);
  }

  get valid() {
    return !!this.selection;
  }

}
