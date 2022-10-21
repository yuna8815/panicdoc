import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smd-quotation-message-card',
  templateUrl: './smd-quotation-message-card.component.html',
  styleUrls: ['./smd-quotation-message-card.component.scss'],
})
export class SmdQuotationMessageCardComponent implements OnInit {

  @Input() word = '단어';
  @Input() text = '인용구';

  constructor() { }

  ngOnInit() {}

}
