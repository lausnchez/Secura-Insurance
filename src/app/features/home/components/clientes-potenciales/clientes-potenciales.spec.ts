import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesPotenciales } from './clientes-potenciales';

describe('ClientesPotenciales', () => {
  let component: ClientesPotenciales;
  let fixture: ComponentFixture<ClientesPotenciales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesPotenciales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesPotenciales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
