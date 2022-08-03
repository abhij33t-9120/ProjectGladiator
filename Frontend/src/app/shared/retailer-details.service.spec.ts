import { TestBed } from '@angular/core/testing';

import { RetailerDetailsService } from './retailer-details.service';

describe('RetailerDetailsService', () => {
  let service: RetailerDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetailerDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
