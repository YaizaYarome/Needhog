import { TestBed } from '@angular/core/testing';

import { SendFormServiceService } from './send-form-service.service';

describe('SendFormServiceService', () => {
  let service: SendFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
