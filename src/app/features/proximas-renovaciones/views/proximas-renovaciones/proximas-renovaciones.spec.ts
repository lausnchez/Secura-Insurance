import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximasRenovaciones } from './proximas-renovaciones';

describe('ProximasRenovaciones', () => {
  let component: ProximasRenovaciones;
  let fixture: ComponentFixture<ProximasRenovaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProximasRenovaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximasRenovaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
