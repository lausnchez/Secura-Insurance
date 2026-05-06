import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Cliente } from '../../../../core/models/client.model';

@Component({
  selector: 'home-clientes-potenciales-card',
  imports: [],
  templateUrl: './clientes-potenciales-card.html',
  styleUrl: './clientes-potenciales-card.scss',
})
export class ClientesPotencialesCard {
  @Input() client!:Cliente;
  @Output() deleteEmitter = new EventEmitter<Cliente>;

  deleteClient(){
    console.log("child");
    this.deleteEmitter.emit(this.client);
  }
}
