import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SmdItemListItem } from 'src/app/smd-widgets/smd-item-list/smd-item-list.component';
import { GradeLabels1 } from 'src/smd-common';
import { SmdRadioComponent } from '../smd-radio/smd-radio.component';

@Component({
  selector: 'smd-score-select',
  templateUrl: './smd-score-select.component.html',
  styleUrls: ['./smd-score-select.component.scss'],
})
export class SmdScoreSelectComponent implements OnInit {

  @Input() text = 'QQQ';
  items: SmdItemListItem[] = [
    { name: '0', value: 0, },
    { name: '1', value: 1, },
    { name: '2', value: 2, },
    { name: '3', value: 3, },
    { name: '4', value: 4, },
    { name: '5', value: 5, },
    { name: '6', value: 6, },
    { name: '7', value: 7, },
    { name: '8', value: 8, },
    { name: '9', value: 9, },
  ];

  @Input() texts = GradeLabels1;
  @Input() selected;
  @Output() selectedChange = new EventEmitter<any>();
  @Input() disabled = false;

  @ViewChild(SmdRadioComponent, { static: true }) radio: SmdRadioComponent;

  constructor() { }

  ngOnInit() {}

}
