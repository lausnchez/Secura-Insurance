import { TestBed } from '@angular/core/testing';

import { LoadHomeJsonService } from './load-json';

describe('LoadHomeJsonService', () => {
  let service: LoadHomeJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadHomeJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
