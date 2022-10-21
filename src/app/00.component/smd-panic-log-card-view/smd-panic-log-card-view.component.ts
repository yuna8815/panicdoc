import { Component, Input, OnInit } from '@angular/core';
import { PanicLogItem, TimeFormat_yyyyMMdd_e_a_hhmm } from 'src/smd-common';

@Component({
  selector: 'smd-panic-log-card-view',
  templateUrl: './smd-panic-log-card-view.component.html',
  styleUrls: ['./smd-panic-log-card-view.component.scss'],
})
export class SmdPanicLogCardViewComponent implements OnInit {

  @Input() item: PanicLogItem;

  TimeFormat_yyyyMMdd_e_a_hhmm = TimeFormat_yyyyMMdd_e_a_hhmm;

  constructor() { }

  ngOnInit() {}

}
