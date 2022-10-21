import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { ProgramDef, ProgramSet } from 'src/smd-common';

@Component({
  selector: 'app-my-program',
  templateUrl: './my-program.component.html',
  styleUrls: ['./my-program.component.scss'],
})
export class MyProgramComponent implements OnInit {

  programs: ProgramDef[] = [
    {
      title: '공황장애 알아보기',
      courses: [
        {
          icon: 'icon3', name: '공황장애 이해하기',
          duration: 5, status: 'complete',
          link: 'program1/course1/1',
        },
        {
          icon: 'icon5', name: 'Quiz : 공황장애 바로 알기',
          duration: 10, status: 'ready',
          link: 'program1-course2-quiz/0',
        },
      ]
    },
    {
      title: '나의 공황 바라보기',
      courses: [
        {
          icon: 'icon1', name: '공황과 불안 관찰하고 기록하기',
          duration: 3, status: 'complete',
          link: 'program2/course1/1',
        },
        {
          icon: 'icon2', name: '공황과 불안 파헤치기',
          duration: 8, status: 'ready',
          link: 'program2/course2/1',
        },
      ]
    },
    {
      title: '이완훈련을 통한 신체감각 다스리기',
      courses: [
        {
          icon: 'icon3', name: '이완훈련이 왜 필요할까요?',
          duration: 5, status: 'complete',
          link: 'program3/course1/1',
        },
        {
          icon: 'icon1', name: '복식호흡 배우기',
          duration: 3, status: 'ready',
          link: 'program3/course2/1',
        },
        {
          icon: 'icon2', name: '점진적 근육이완 배우기',
          duration: 8, status: 'ready',
          link: 'program3/course3/1',
        },
        {
          icon: 'icon4', name: '이완훈련 하기',
          duration: 8, status: 'ready',
          link: 'program3/course4/1',
          home: '3',
        },
      ]
    },
  ];

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

}
