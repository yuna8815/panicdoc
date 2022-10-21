import { Component, OnInit } from '@angular/core';
import { SmdModalService } from 'src/app/smd-widgets/smd-modal.service';
import { NameValue } from 'src/collection';
import { messages } from 'src/messages';

@Component({
  selector: 'program5-course4-step4',
  templateUrl: './program5-course4-step4.component.html',
  styleUrls: ['./program5-course4-step4.component.scss'],
})
export class Program5Course4Step4Component implements OnInit {

  items: NameValue[] = [
    {
      name: '낯설고 복잡한 장소에서는 누구나 당황할 수 있어',
    },
    {
      name: '시간이 지날수록  적응이 되고 나아질 거야',
    },
    {
      name: '잠깐 앉아서 물을 마시면서 왜 여기 왔는지, 무엇을 할지 생각해보자',
    },
    {
      name: '이전에 배웠던 복식호흡을 하면서 숨을 천천히 쉬어봐',
    },
    {
      name: '지금 불편하고 불안하지만 이 또한 곧 지나갈 거야',
    },
    {
      name: '곧 기절할지도 몰라. 얼른 거기서 나와',
    },
    {
      name: messages.Etc,
    },
  ];

  constructor(public smdModal: SmdModalService) { }

  ngOnInit() {}

}
