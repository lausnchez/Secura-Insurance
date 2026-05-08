import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrHeader } from './pr-header';

describe('PrHeader', () => {
  let component: PrHeader;
  let fixture: ComponentFixture<PrHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
