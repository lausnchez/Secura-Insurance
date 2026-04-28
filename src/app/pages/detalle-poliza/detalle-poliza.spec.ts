import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePoliza } from './detalle-poliza';

describe('DetallePoliza', () => {
  let component: DetallePoliza;
  let fixture: ComponentFixture<DetallePoliza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePoliza]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePoliza);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
