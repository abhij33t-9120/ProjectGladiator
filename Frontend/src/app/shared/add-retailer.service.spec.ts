import { TestBed } from '@angular/core/testing';

import { AddRetailerService } from './add-retailer.service';

describe('AddRetailerService', () => {
  let service: AddRetailerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddRetailerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
