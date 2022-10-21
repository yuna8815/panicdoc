import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'smd-number-spinner',
  templateUrl: './smd-number-spinner.component.html',
  styleUrls: ['./smd-number-spinner.component.scss'],
})
export class SmdNumberSpinnerComponent implements OnInit {

  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>();
  @Input() disabled = false;
  min = 0;
  max = 99;

  constructor() { }

  ngOnInit() {}

  decrease() {
    if (this.disabled) { return; }
    if (this.min == this.value) {
      return;
    }
    this.value--;
    this.valueChange.emit(this.value);
  }

  increase() {
    if (this.disabled) { return; }
    if (this.max == this.value) {
      return;
    }
    this.value++;
    this.valueChange.emit(this.value);
  }
}
