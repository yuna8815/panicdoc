import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public route: ActivatedRoute, private router: Router, public auth: AuthService, public context: GlobalContextService) {
  }

  ngOnInit() {
  }

  back = () => {
    window.history.back();
  }

  async next() {
    window.history.back();
  }

}
