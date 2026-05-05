import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaRow } from './poliza-row';

describe('PolizaRow', () => {
  let component: PolizaRow;
  let fixture: ComponentFixture<PolizaRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolizaRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolizaRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
