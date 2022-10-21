import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'smd-program-footer',
  templateUrl: './smd-program-footer.component.html',
  styleUrls: ['./smd-program-footer.component.scss'],
})
export class SmdProgramFooterComponent implements OnInit {

  @Input() text = '다음'

  // 상단 버튼
  @Input() top: CallableFunction;
  @Input() topButtonText = '???';

  // 왼쪽 버튼
  @Input() front: CallableFunction;
  @Input() frontButtonText = '다시 선택하기';

  // 메인 버튼
  @Output() next = new EventEmitter();
  @Input() disabled = false;
  @Input() fill = 'solid';
  @Input() clickOnDisabled: CallableFunction;
  @Input() transparentBackground = false;

  // 재생 컨트롤 표시여부
  @Input() showPlayControl = false;

  constructor() { }

  ngOnInit() {}

}
