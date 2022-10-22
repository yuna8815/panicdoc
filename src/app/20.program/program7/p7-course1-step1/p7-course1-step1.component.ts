import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { NameValue } from 'src/collection';
import { messages } from 'src/messages';

@Component({
  selector: 'p7-course1-step1',
  templateUrl: './p7-course1-step1.component.html',
  styleUrls: ['./p7-course1-step1.component.scss'],
})
export class P7Course1Step1Component implements OnInit {

  items: NameValue[] = [
    {
      name: '너무 바빠 훈련하는 것을 잊어버렸습니다',
    },
    {
      name: '앱을 이용하여 훈련하는 것이 어렵습니다',
    },
    {
      name: '훈련 내 증상과 마주하는 것이 어렵습니다',
    },
    {
      name: '너무 무기력하여 의지가 없습니다',
    },
    {
      name: '훈련의 필요성을 못 느끼겠습니다',
    },
    {
      name: messages.Etc
    },
  ];

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

}
