import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDesplegable } from './user-desplegable';

describe('UserDesplegable', () => {
  let component: UserDesplegable;
  let fixture: ComponentFixture<UserDesplegable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDesplegable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDesplegable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
