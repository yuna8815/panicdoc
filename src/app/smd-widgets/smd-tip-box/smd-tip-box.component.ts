import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smd-tip-box',
  templateUrl: './smd-tip-box.component.html',
  styleUrls: ['./smd-tip-box.component.scss'],
})
export class SmdTipBoxComponent implements OnInit {

  @Input() text = '아주 간단하게라도 작성해 보세요.'
  @Input() checkmark = false;

  constructor() { }

  ngOnInit() {}

}
