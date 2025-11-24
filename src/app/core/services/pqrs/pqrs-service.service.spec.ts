import { TestBed } from '@angular/core/testing';

import { PqrsServiceService } from './pqrs-service.service';

describe('PqrsServiceService', () => {
  let service: PqrsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PqrsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
