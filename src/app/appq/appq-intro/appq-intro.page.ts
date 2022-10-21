import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ToastController } from '@ionic/angular';
import { messages } from 'src/messages';
import { NameValue } from 'src/collection';

@Component({
  selector: 'app-appq-intro',
  templateUrl: './appq-intro.page.html',
  styleUrls: ['./appq-intro.page.scss'],
})
export class AppqIntroPage implements OnInit {

  constructor(private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['appq-step1']);
  }

}
