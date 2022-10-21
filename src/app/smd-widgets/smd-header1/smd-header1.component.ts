import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'smd-header1',
  templateUrl: './smd-header1.component.html',
  styleUrls: ['./smd-header1.component.scss'],
})
export class SmdHeader1Component implements OnInit {

  @Input() title = 'TITLE';
  @Input() back: string | CallableFunction = '/';
  @Output() close = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  onBack() {
    if (typeof this.back == 'string') {
      this.router.navigateByUrl(this.back);
    } else {
      this.back();
    }
  }
}
