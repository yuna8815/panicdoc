import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/global-context.service';

@Component({
  selector: 'program4-course3-step4',
  templateUrl: './program4-course3-step4.component.html',
  styleUrls: ['./program4-course3-step4.component.scss'],
})
export class Program4Course3Step4Component implements OnInit {

  constructor(public context: GlobalContextService) { }

  ngOnInit() {}

}
