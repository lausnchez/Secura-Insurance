import { TestBed } from '@angular/core/testing';

import { LoadJsonTotalRenovations } from './load-json-total-renovations';

describe('LoadJsonTotalRenovations', () => {
  let service: LoadJsonTotalRenovations;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadJsonTotalRenovations);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
