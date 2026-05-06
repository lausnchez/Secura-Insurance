import { Component, inject } from '@angular/core';
import { LoadJsonClients } from '../../services/load-json-clients';
import { ClientesPotencialesCard } from '../clientes-potenciales-card/clientes-potenciales-card';

@Component({
  selector: 'home-clientes-potenciales',
  imports: [ClientesPotencialesCard],
  templateUrl: './clientes-potenciales.html',
  styleUrl: './clientes-potenciales.scss',
})
export class ClientesPotenciales {
  private loadClientJson = inject(LoadJsonClients);
  homeClientData = this.loadClientJson.homeClientData;
}
