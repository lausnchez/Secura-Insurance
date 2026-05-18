import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpContacto } from './dp-contacto';

describe('DpContacto', () => {
  let component: DpContacto;
  let fixture: ComponentFixture<DpContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DpContacto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpContacto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
