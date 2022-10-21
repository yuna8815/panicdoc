import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smd3-thought-flow-diagram',
  templateUrl: './smd3-thought-flow-diagram.component.html',
  styleUrls: ['./smd3-thought-flow-diagram.component.scss'],
})
export class Smd3ThoughtFlowDiagramComponent implements OnInit {

  @Input() word1 = '단어1'
  @Input() word2 = '단어2'
  @Input() word3 = '단어3'
  @Input() note1 = '노트1'
  @Input() note2 = '노트2'
  @Input() note3 = '노트3'

  constructor() { }

  ngOnInit() {}

}
