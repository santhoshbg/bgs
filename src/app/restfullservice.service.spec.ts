import { TestBed } from '@angular/core/testing';

import { RestfullserviceService } from './restfullservice.service';

describe('RestfullserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestfullserviceService = TestBed.get(RestfullserviceService);
    expect(service).toBeTruthy();
  });
});
