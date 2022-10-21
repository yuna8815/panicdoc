import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ToastController } from '@ionic/angular';
import { messages } from 'src/messages';
import { NameValue } from 'src/collection';

@Component({
  selector: 'app-appq-step1',
  templateUrl: './appq-step1.page.html',
  styleUrls: ['./appq-step1.page.scss'],
})
export class AppqStep1Page implements OnInit {

  questions = [
    '사람들과 대화하는 것',
    '차를 타고 자동세차기 안으로 들어가기 ',
    '날씨가 몹시 더운 날 격렬한 운동하기',
    '공기침대 또는 풍선에 공기를 빨리 불어 넣기 ',
    '다른 사람들 앞에서 식사하기',
    '더운 날씨에 등산하기',
    '치과에서 마취 받기',
    '회의 중간에 개입하기 ',
    '사람들 앞에서 이야기나 연설하기',
    '혼자서 격렬하게 운동하기',
    '집에서 멀리 떨어진 곳을 혼자 가기',
    '사람들 많은 모임에서 자신을 소개하기 ',
    '아무도 없는 고립된 곳에서 혼자 걷기 ',
    '고속도로에서 운전하기 ',
    '남의 눈에 튀는 옷을 입기 ',
    '길을 잃어버릴까 하는 두려움',
    '아주 진한 커피 마시기',
    '극장의 한가운데 좌석에서 영화 보기',
    '계단 위로 달려 올라가기',
    '지하철 타기',
    '전화로 대화하기',
    '모르는 사람들과 만나기',
    '다른 사람들 앞에서 서류 작성하기',
    '사람들이 꽉 차 있는 방에 들어가기',
    '집에서 멀리 떨어진 곳에 가서 하룻밤 지내기',
    '술 기운을 느끼기',
    '낮게 깔린 긴 다리를 건너기',
  ];
  questionsValue = {};

  constructor(private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['appq-intro']);
  }

  next() {
    this.router.navigate(['appq-step2']);
  }

  get valid() {
    const cnt = Object.values(this.questionsValue).reduce((count: number, curr: any) => count + (curr != null ? 1 : 0), 0);
    return cnt == this.questions.length;
  }

}
