import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'smd-chip-select',
  templateUrl: './smd-chip-select.component.html',
  styleUrls: ['./smd-chip-select.component.scss'],
})
export class SmdChipSelectComponent implements OnInit {

  selectedIndex = 3;

  @Output() selected = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}
