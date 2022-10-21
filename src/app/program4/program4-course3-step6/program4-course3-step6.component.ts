import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/global-context.service';

@Component({
  selector: 'program4-course3-step6',
  templateUrl: './program4-course3-step6.component.html',
  styleUrls: ['./program4-course3-step6.component.scss'],
})
export class Program4Course3Step6Component implements OnInit {

  constructor(public context: GlobalContextService) { }

  ngOnInit() {}

}
