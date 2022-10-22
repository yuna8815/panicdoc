import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'program4-course3-step1',
  templateUrl: './program4-course3-step1.component.html',
  styleUrls: ['./program4-course3-step1.component.scss'],
})
export class Program4Course3Step1Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

}
