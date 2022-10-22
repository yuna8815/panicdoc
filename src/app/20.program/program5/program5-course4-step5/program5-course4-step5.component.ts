import { Component, OnInit } from '@angular/core';
import { SmdModalService } from 'src/app/00.component/smd-modal.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { NameValue } from 'src/collection';
import { messages } from 'src/messages';

@Component({
  selector: 'program5-course4-step5',
  templateUrl: './program5-course4-step5.component.html',
  styleUrls: ['./program5-course4-step5.component.scss'],
})
export class Program5Course4Step5Component implements OnInit {

  items: NameValue[] = [
    {
      name: '잠깐 앉아서 물을 마시면서 왜 여기 왔는 지, 무엇을 할 지 생각해 보자',
    },
    {
      name: '고통스러운 상황을 잘 넘기고 쇼핑센터에 가는 것에 좀 더 자신감을 갖게 된다',
    },
    {
      name: '호흡이 안정되면서 이전처럼 별 일 없이 외출을 마치고 귀가하게 된다',
    },
    {
      name: '쇼핑센터에서 쓰러져 응급실로 옮겨진다',
    },
    {
      name: messages.Etc,
    },
  ];

  constructor(public smdModal: SmdModalService, public context: GlobalContextService) { }

  ngOnInit() {}

}
