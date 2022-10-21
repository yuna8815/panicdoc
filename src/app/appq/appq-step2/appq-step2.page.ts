import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ToastController } from '@ionic/angular';
import { messages } from 'src/messages';
import { NameValue } from 'src/collection';

@Component({
  selector: 'app-appq-step2',
  templateUrl: './appq-step2.page.html',
  styleUrls: ['./appq-step2.page.scss'],
})
export class AppqStep2Page implements OnInit {

  constructor(private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['appq-intro']);
  }

  next() {
    this.router.navigate(['user-info-input']);
  }

  get valid() {
    return true;
  }

}
