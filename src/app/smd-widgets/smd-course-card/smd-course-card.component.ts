import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'smd-course-card',
  templateUrl: './smd-course-card.component.html',
  styleUrls: ['./smd-course-card.component.scss'],
})
export class SmdCourseCardComponent implements OnInit {

  @Input() name = '';
  @Input() icon = '';
  @Input() duration = 1;
  @Input() status: 'ready' | 'complete' | 'waiting' = 'ready';
  @Input() link = '';
  @Input() home;
  @Input() count = 0;

  constructor(public el: ElementRef, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {}

  onClicked() {
    if (!this.link) { return; }
    this.router.navigate([this.link], {
      ...(this.home != null && { queryParams: { home: this.home } }),
    });
  }

}
