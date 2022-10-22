import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'program4-course3-intro3',
  templateUrl: './program4-course3-intro3.component.html',
  styleUrls: ['./program4-course3-intro3.component.scss'],
})
export class Program4Course3Intro3Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

}
