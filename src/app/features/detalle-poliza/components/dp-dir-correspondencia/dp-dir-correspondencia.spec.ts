import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpDirCorrespondencia } from './dp-dir-correspondencia';

describe('DpDirCorrespondencia', () => {
  let component: DpDirCorrespondencia;
  let fixture: ComponentFixture<DpDirCorrespondencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DpDirCorrespondencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpDirCorrespondencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
