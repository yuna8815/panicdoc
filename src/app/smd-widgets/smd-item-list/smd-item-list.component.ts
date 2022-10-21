import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NameValue, NameValueChecked } from 'src/collection';

export interface SmdItemListItem extends NameValueChecked {
  note?: string;
}

@Component({
  selector: 'smd-item-list',
  templateUrl: './smd-item-list.component.html',
  styleUrls: ['./smd-item-list.component.scss'],
})
export class SmdItemListComponent implements OnInit {

  // 참이면 복수선택 불가
  @Input() radio = true;
  @Input() items: SmdItemListItem[] = [];
  @Input() selection;
  @Output() selectionChange = new EventEmitter<any>();
  @Input() divider = false;
  @Input() marginSize = 0;
  @Input() innerMarginSize = 0;
  checked = {};

  constructor() { }

  ngOnInit() {}

  onSelected(item, i) {
    if (this.radio) {
      if (this.selection !== item) {
        this.selection = item;
        this.selectionChange.emit(this.selection);
      }
    } else {
      this.checked[i] = !this.checked[i];
    }
  }

  // 선택한 개수
  public get checkedCount() {
    return Object.values(this.checked).reduce((count: number, curr: any) => count + (curr ? 1 : 0), 0);
  }

}
