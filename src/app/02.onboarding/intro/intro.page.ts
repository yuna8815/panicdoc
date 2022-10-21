import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonButton, IonModal } from '@ionic/angular';
import { NameValue } from 'src/collection';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  step = 2;
  treatmentSteps = [
    {
      text: '공황장애 알아보기',
      note: '공황장애 평가 1',
    },
    {
      text: '나의 공황 바라보기',
    },
    {
      text: '이완훈련을 통한 신체감각 다스리기',
    },
    {
      text: '나의 생각 바라보기',
    },
    {
      text: '나의 생각 바로잡기',
    },
    {
      text: '증상 마주하기',
    },
    {
      text: '일상생활에서 훈련하기',
    },
    {
      text: '치료 마무리하기',
      note: '공황장애 평가 2',
    },
  ];
  items: NameValue[] = [
    {
      name: 'PanicDoc에서 제공하는 교육과 훈련에 성실하게 임하겠습니다.',
    },
    {
      name: 'PanicDoc에서 주간별로 준비된 프로그램을 성실하게 완료하겠습니다.',
    },
    {
      name: '매일 10~20분 정도의 시간을 지켜 앱을 활용한 치료 활동에 적극적으로 참여하겠습니다.',
    },
  ];
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild('okButton', { static: false }) okButton: IonButton;

  breakpoint = .5;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.step = +(params['step'] || 1);
    });

    // #HACK:
    this.breakpoint = 620 / document.documentElement.scrollHeight;
  }

  ngOnInit() {
  }

  next() {
    if (this.step == 2) {
      this.modal.present();
      return;
    }

    this.step++;
    if (this.step > 3) {
      this.step = 1;
    }
  }

  startTreatment() {
  }

  ok() {
    this.modal.dismiss();
    this.router.navigate(['/patient-question']);
  }
}
