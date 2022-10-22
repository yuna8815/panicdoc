import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { NameValue } from 'src/collection';
import { messages } from 'src/messages';

@Component({
  selector: 'p2-course1-step1',
  templateUrl: './p2-course1-step1.component.html',
  styleUrls: ['./p2-course1-step1.component.scss'],
})
export class P2Course1Step1Component implements OnInit {

  items: NameValue[] = [
    {
      name: '너무 바빠 작성하는 것을 잊어버렸습니다',
    },
    {
      name: '나의 증상과 마주하는 것이 어렵습니다',
    },
    {
      name: '앱을 이용하여 작성하는 것이 어렵습니다',
    },
    {
      name: '너무 무기력하여 의지가 없습니다',
    },
    {
      name: '작성의 필요성을 못 느끼겠습니다',
    },
    {
      name: messages.Etc
    },
  ];
  selection;

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

}
