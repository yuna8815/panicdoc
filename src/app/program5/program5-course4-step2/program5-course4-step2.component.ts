import { Component, OnInit } from '@angular/core';
import { SmdModalService } from 'src/app/00.component/smd-modal.service';
import { NameValue } from 'src/collection';
import { messages } from 'src/messages';

@Component({
  selector: 'program5-course4-step2',
  templateUrl: './program5-course4-step2.component.html',
  styleUrls: ['./program5-course4-step2.component.scss'],
})
export class Program5Course4Step2Component implements OnInit {

  items: NameValue[] = [
    {
      name: '기절할 것만 같다',
    },
    {
      name: '사람들 앞에서 구토를 할 것 같다',
    },
    {
      name: '사람들이 이상하다며 쳐다보는 것 같다',
    },
    {
      name: '아무도 나를 도와주지 않아 죽을 것 같다',
    },
    {
      name: '나는 이 낯선 곳에서 탈출할 수 없을 것이다',
    },
    {
      name: messages.Etc,
    },
  ];

  constructor(public smdModal: SmdModalService) { }

  ngOnInit() {}

}
