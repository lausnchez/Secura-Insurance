import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrFilterChip } from './pr-filter-chip';

describe('PrFilterChip', () => {
  let component: PrFilterChip;
  let fixture: ComponentFixture<PrFilterChip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrFilterChip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrFilterChip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
