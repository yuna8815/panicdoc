import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/global-context.service';
import { SmdModalService } from 'src/app/smd-widgets/smd-modal.service';

@Component({
  selector: 'program5-course4-step6',
  templateUrl: './program5-course4-step6.component.html',
  styleUrls: ['./program5-course4-step6.component.scss'],
})
export class Program5Course4Step6Component implements OnInit {

  constructor(public smdModal: SmdModalService, public context: GlobalContextService) { }

  ngOnInit() {}

}
