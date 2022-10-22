import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'smd-header1',
  templateUrl: './smd-header1.component.html',
  styleUrls: ['./smd-header1.component.scss'],
})
export class SmdHeader1Component implements OnInit {

  @Input() title = 'TITLE';
  @Output() back = new EventEmitter();
  @Output() close = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
