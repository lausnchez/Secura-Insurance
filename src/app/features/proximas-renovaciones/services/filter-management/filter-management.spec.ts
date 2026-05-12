import { TestBed } from '@angular/core/testing';

import { FilterManagement } from './filter-management';

describe('FilterManagement', () => {
  let service: FilterManagement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterManagement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
