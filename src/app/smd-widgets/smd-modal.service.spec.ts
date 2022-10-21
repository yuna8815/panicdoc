import { TestBed } from '@angular/core/testing';

import { SmdModalService } from './smd-modal.service';

describe('SmdModalService', () => {
  let service: SmdModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmdModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
