import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { messages } from 'src/messages';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.page.html',
  styleUrls: ['./patient-login.page.scss'],
})
export class PatientLoginPage implements OnInit {

  patientName = '';
  patientCode = '';
  patientCodeUnmatched = false;

  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit() {
  }

  async verify() {

    if (!this.patientName || !this.patientCode) {
      const toast = await this.toastController.create({
        message: messages.PleaseComplete,
        duration: 2000,
        position: 'bottom',
        cssClass: 'toast-y-up100px',
        color: 'dark',
      });
      toast.present();
      return;
    }

    // 올바르지 않은코드
    if (this.patientCode != '000000') {
      this.patientCodeUnmatched = true;
      return;
    }

    this.router.navigate(['loading']);
  }

  onCodeChange() {
    this.patientCodeUnmatched = false;
  }
}
