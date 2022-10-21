import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smd-card',
  templateUrl: './smd-card.component.html',
  styleUrls: ['./smd-card.component.scss'],
})
export class SmdCardComponent implements OnInit {

  @Input() title;
  @Input() colorizeBorder = false;

  constructor() { }

  ngOnInit() {}

}
