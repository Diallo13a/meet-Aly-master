import { TestBed } from '@angular/core/testing';

import { BienResolverService } from './bien-resolver.service';

describe('BienResolverService', () => {
  let service: BienResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BienResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
