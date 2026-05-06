import { Component, Input } from '@angular/core';
import { Cliente } from '../../../../core/models/client.model';

@Component({
  selector: 'home-clientes-potenciales-card',
  imports: [],
  templateUrl: './clientes-potenciales-card.html',
  styleUrl: './clientes-potenciales-card.scss',
})
export class ClientesPotencialesCard {
  @Input() client!:Cliente;
}
