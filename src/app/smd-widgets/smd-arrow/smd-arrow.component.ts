import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smd-arrow',
  templateUrl: './smd-arrow.component.html',
  styleUrls: ['./smd-arrow.component.scss'],
})
export class SmdArrowComponent implements OnInit {

  @Input() gray = true;
  @Input() count = 1;

  constructor() { }

  ngOnInit() {}

}
