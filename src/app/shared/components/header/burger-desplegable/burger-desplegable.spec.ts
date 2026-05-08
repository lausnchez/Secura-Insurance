import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerDesplegable } from './burger-desplegable';

describe('BurgerDesplegable', () => {
  let component: BurgerDesplegable;
  let fixture: ComponentFixture<BurgerDesplegable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerDesplegable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerDesplegable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
