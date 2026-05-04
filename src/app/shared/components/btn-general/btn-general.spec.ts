import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGeneral } from './btn-general';

describe('BtnGeneral', () => {
  let component: BtnGeneral;
  let fixture: ComponentFixture<BtnGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnGeneral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnGeneral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
