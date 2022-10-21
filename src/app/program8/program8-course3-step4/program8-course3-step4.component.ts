import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'program8-course3-step4',
  templateUrl: './program8-course3-step4.component.html',
  styleUrls: ['./program8-course3-step4.component.scss'],
})
export class Program8Course3Step4Component implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit() {}

}
