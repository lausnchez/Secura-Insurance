import { TestBed } from '@angular/core/testing';

import { LoadDetalleService } from './load-detalle-service';

describe('LoadDetalleService', () => {
  let service: LoadDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
