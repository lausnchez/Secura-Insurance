import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpMetodoPago } from './dp-metodo-pago';

describe('DpMetodoPago', () => {
  let component: DpMetodoPago;
  let fixture: ComponentFixture<DpMetodoPago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DpMetodoPago]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpMetodoPago);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
