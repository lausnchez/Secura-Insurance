import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrModal } from './pr-modal';

describe('PrModal', () => {
  let component: PrModal;
  let fixture: ComponentFixture<PrModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
