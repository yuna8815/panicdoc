import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'smd-checkbox',
  templateUrl: './smd-checkbox.component.html',
  styleUrls: ['./smd-checkbox.component.scss'],
})
export class SmdCheckboxComponent implements OnInit {

  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  onClicked() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}
