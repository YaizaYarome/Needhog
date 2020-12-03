import { TestBed } from '@angular/core/testing';

import { MountsService } from './mounts.service';

describe('MountsService', () => {
  let service: MountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
