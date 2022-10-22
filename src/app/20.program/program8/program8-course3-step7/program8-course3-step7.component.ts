import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'program8-course3-step7',
  templateUrl: './program8-course3-step7.component.html',
  styleUrls: ['./program8-course3-step7.component.scss'],
})
export class Program8Course3Step7Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

}
