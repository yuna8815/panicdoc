import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { NameValue } from 'src/collection';
import { messages } from 'src/messages';

@Component({
  selector: 'p2s2-course2-step3',
  templateUrl: './p2s2-course2-step3.component.html',
  styleUrls: ['./p2s2-course2-step3.component.scss'],
})
export class P2s2Course2Step3Component implements OnInit {

  items: NameValue[] = [
    {
      name: '숨이 막혀서 기절하거나 쓰러질 것 같다',
    },
    {
      name: '심장이 마비될 것 같다',
    },
    {
      name: '갑자기 죽어버릴 것 같다',
    },
    {
      name: '이러다 미쳐버릴 것 같다',
    },
    {
      name: '기절할 것만 같다',
    },
    {
      name: '공황상태가 영원할 것이다',
    },
    {
      name: '나는 이 곳에서 탈출할 수 없을 것이다',
    },
    {
      name: '앞으로 나는 아무 것도 할 수 없을 것이다',
    },
    {
      name: '큰 병에 걸린 것이 틀림없다',
    },
    {
      name: '이 상황을 벗어날 수 없을 것이다',
    },
    {
      name: '나의 공황을 알면 주변 사람이 모두 떠날 것이다',
    },
    {
      name: '아무도 나를 도와주지 않아 죽을 것 같다',
    },
  ];

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

}
