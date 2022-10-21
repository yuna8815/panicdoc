import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/global-context.service';

@Component({
  selector: 'program4-course3-step5',
  templateUrl: './program4-course3-step5.component.html',
  styleUrls: ['./program4-course3-step5.component.scss'],
})
export class Program4Course3Step5Component implements OnInit {

  constructor(public context: GlobalContextService) { }

  ngOnInit() {}

}
