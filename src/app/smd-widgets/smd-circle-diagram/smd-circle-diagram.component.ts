import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smd-circle-diagram',
  templateUrl: './smd-circle-diagram.component.html',
  styleUrls: ['./smd-circle-diagram.component.scss'],
})
export class SmdCircleDiagramComponent implements OnInit {

  @Input() word1 = '단어1'
  @Input() word2 = '단어2'
  @Input() word3 = '단어3'

  constructor() { }

  ngOnInit() {}

}
