import { TestBed } from '@angular/core/testing';

import { HeaderPopUps } from './header-pop-ups';

describe('HeaderPopUps', () => {
  let service: HeaderPopUps;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderPopUps);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
