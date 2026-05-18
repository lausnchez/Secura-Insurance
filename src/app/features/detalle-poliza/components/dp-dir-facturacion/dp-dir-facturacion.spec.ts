import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpDirFacturacion } from './dp-dir-facturacion';

describe('DpDirFacturacion', () => {
  let component: DpDirFacturacion;
  let fixture: ComponentFixture<DpDirFacturacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DpDirFacturacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpDirFacturacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
