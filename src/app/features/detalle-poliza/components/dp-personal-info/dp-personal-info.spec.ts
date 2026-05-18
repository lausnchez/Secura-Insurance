import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpPersonalInfo } from './dp-personal-info';

describe('DpPersonalInfo', () => {
  let component: DpPersonalInfo;
  let fixture: ComponentFixture<DpPersonalInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DpPersonalInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpPersonalInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
