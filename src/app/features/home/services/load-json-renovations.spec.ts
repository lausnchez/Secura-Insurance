import { TestBed } from '@angular/core/testing';

import { LoadRenovationsHomeService } from './load-json-renovations';

describe('LoadRrenovationsHomeService', () => {
  let service: LoadRenovationsHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadRenovationsHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
