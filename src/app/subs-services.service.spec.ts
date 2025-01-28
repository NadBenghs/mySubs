import { TestBed } from '@angular/core/testing';

import { SubsServicesService } from './subs-services.service';

describe('SubsServicesService', () => {
  let service: SubsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
