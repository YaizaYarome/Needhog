import { TestBed } from '@angular/core/testing';

import { MinionsService } from './minions.service';

describe('MinionsService', () => {
  let service: MinionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
