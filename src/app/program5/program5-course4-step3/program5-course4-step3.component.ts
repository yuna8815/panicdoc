import { Component, OnInit } from '@angular/core';
import { SmdModalService } from 'src/app/00.component/smd-modal.service';
import { NameValue } from 'src/collection';
import { messages } from 'src/messages';

@Component({
  selector: 'program5-course4-step3',
  templateUrl: './program5-course4-step3.component.html',
  styleUrls: ['./program5-course4-step3.component.scss'],
})
export class Program5Course4Step3Component implements OnInit {

  items: NameValue[] = [
    {
      name: '지루하다',
    },
    {
      name: '답답하다',
    },
    {
      name: '불안하다',
    },
    {
      name: '무섭다',
    },
    {
      name: '깜작 놀란다',
    },
    {
      name: messages.Etc,
    },
  ];

  constructor(public smdModal: SmdModalService) { }

  ngOnInit() {}

}
