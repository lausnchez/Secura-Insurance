import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrRenovationsTable } from './pr-renovations-table';

describe('PrRenovationsTable', () => {
  let component: PrRenovationsTable;
  let fixture: ComponentFixture<PrRenovationsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrRenovationsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrRenovationsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
