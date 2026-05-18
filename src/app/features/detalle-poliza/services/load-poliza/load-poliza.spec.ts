import { TestBed } from '@angular/core/testing';

import { LoadPoliza } from './load-poliza';

describe('LoadPoliza', () => {
  let service: LoadPoliza;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadPoliza);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
