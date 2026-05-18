import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpUltimasCuotas } from './dp-ultimas-cuotas';

describe('DpUltimasCuotas', () => {
  let component: DpUltimasCuotas;
  let fixture: ComponentFixture<DpUltimasCuotas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DpUltimasCuotas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpUltimasCuotas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
