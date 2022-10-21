import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smd-range',
  templateUrl: './smd-range.component.html',
  styleUrls: ['./smd-range.component.scss'],
})
export class SmdRangeComponent implements OnInit {

  @Input() text = '';
  value = 0;

  constructor() { }

  ngOnInit() {}

}
