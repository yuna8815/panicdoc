import { Component, OnInit } from '@angular/core';
import { SmdModalService } from 'src/app/smd-widgets/smd-modal.service';
import { NameValue } from 'src/collection';
import { messages } from 'src/messages';

@Component({
  selector: 'app-widgets-demo',
  templateUrl: './widgets-demo.page.html',
  styleUrls: ['./widgets-demo.page.scss'],
})
export class WidgetsDemoPage implements OnInit {

  items: NameValue[] = [
    {
      name: '기절해서 옆 차와 부딪힐 것 같다',
    },
    {
      name: '심장마비로 죽을 것 같다',
    },
    {
      name: '내 몸의 통제력을 잃고 사고를 낼 것 같다',
    },
    {
      name: '점차 숨이 막혀 오고 심해질 것이다',
    },
    {
      name: '괜히 혼자 운전을 했다',
    },
    {
      name: messages.Etc,
    },
  ];

  constructor(public smdModal: SmdModalService) { }

  ngOnInit() {
  }

  showConfirm() {
    this.smdModal.confirm({
      title: '타이틀',
      message: '메시지<br />표시'
    });
  }

  showAlert() {
    this.smdModal.alert({
      title: '타이틀',
      message: '메시지<br />표시'
    });
  }

}
