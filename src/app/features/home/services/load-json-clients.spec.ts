import { TestBed } from '@angular/core/testing';

import { LoadJsonClients } from './load-json-clients';

describe('LoadJsonClients', () => {
  let service: LoadJsonClients;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadJsonClients);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
