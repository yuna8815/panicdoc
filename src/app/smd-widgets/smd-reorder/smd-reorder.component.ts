import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup, ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'smd-reorder',
  templateUrl: './smd-reorder.component.html',
  styleUrls: ['./smd-reorder.component.scss'],
})
export class SmdReorderComponent implements OnInit {

  @Input() items = [
    '아이템1',
    '아이템2',
    '아이템3',
  ];

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor() { }

  ngOnInit() {}

  doReorder(ev) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    this.items = ev.detail.complete(this.items);
  }
}
