import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesPotencialesCard } from './clientes-potenciales-card';

describe('ClientesPotencialesCard', () => {
  let component: ClientesPotencialesCard;
  let fixture: ComponentFixture<ClientesPotencialesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesPotencialesCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesPotencialesCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
