import { TestBed } from '@angular/core/testing';

import { LoadDetallesPoliza } from './load-detalles-poliza';

describe('LoadDetallesPoliza', () => {
  let service: LoadDetallesPoliza;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadDetallesPoliza);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
