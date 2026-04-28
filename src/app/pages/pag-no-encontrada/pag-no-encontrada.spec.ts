import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagNoEncontrada } from './pag-no-encontrada';

describe('PagNoEncontrada', () => {
  let component: PagNoEncontrada;
  let fixture: ComponentFixture<PagNoEncontrada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagNoEncontrada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagNoEncontrada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
