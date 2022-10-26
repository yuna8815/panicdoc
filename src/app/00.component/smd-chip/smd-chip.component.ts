import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type ChipVariant = undefined | 'circle';

@Component({
  selector: 'smd-chip',
  templateUrl: './smd-chip.component.html',
  styleUrls: ['./smd-chip.component.scss'],
})
export class SmdChipComponent implements OnInit {

  @Input() text = ''
  @Input() checkable = true;
  @Input() checked = true;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() clicked = new EventEmitter();
  @Input() width: string | undefined;
  @Input() variant: ChipVariant;
  @Input() disabled = false;

  constructor() { }

  ngOnInit() {}

  onClicked() {
    if (this.disabled) { return; }
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
    this.clicked.emit({text: this.text, checked: this.checked});
  }
}
