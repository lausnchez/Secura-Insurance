import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrTableRow } from './pr-table-row';

describe('PrTableRow', () => {
  let component: PrTableRow;
  let fixture: ComponentFixture<PrTableRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrTableRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrTableRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
