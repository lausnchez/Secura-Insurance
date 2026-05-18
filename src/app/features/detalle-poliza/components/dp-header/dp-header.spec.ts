import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpHeader } from './dp-header';

describe('DpHeader', () => {
  let component: DpHeader;
  let fixture: ComponentFixture<DpHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DpHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
