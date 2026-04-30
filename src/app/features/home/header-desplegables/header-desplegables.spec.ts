import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDesplegables } from './header-desplegables';

describe('HeaderDesplegables', () => {
  let component: HeaderDesplegables;
  let fixture: ComponentFixture<HeaderDesplegables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDesplegables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDesplegables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
