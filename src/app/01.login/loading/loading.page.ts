import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading = true;
  open = false;
  openDate = new Date();

  data: any = [
    'PanicDoc 앱 시작을 준비 중입니다.\r\n조금만 기다리시면 PanicDoc을 만날 수 있어요!',
    '{{ auth.name }}님의 프로그램은\r\n{{ openDate }} 에 시작됩니다.',
    '아래 시작하기 버튼을 눌러\r\n프로그램을 함께 시작해볼까요?'
  ]

  constructor(
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  start() {
    this.router.navigate(['/onboarding/intro']);
  }
}
