import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { NameValue } from 'src/collection';
import { SmdChipComponent, ChipVariant } from '../smd-chip/smd-chip.component';

@Component({
  selector: 'smd-radio',
  templateUrl: './smd-radio.component.html',
  styleUrls: ['./smd-radio.component.scss'],
})
export class SmdRadioComponent implements OnInit {

  @Input() radio = true;
  @Input() items: NameValue[] = [];
  @Input() selected: any;
  @Output() selectedChange = new EventEmitter<any>();
  @Input() itemWidth: string | undefined;
  @Input() chipVariant: ChipVariant;
  @Input() disabled = false;

  //
  @Input() marginDefault = true;

  @ViewChildren(SmdChipComponent) chips: QueryList<SmdChipComponent>;

  constructor() { }

  ngOnInit() {}

  onCheckedChange(item: NameValue) {
    if (this.disabled) { return; }
    if (this.selected === item.value) {
      return;
    }

    this.selected = item.value;
    this.selectedChange.emit(item.value);
  }
}
