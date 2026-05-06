import { Component, inject } from '@angular/core';
import { LoadJsonClients } from '../../services/load-json-clients';
import { ClientesPotencialesCard } from '../clientes-potenciales-card/clientes-potenciales-card';
import { Cliente } from '../../../../core/models/client.model';

@Component({
  selector: 'home-clientes-potenciales',
  imports: [ClientesPotencialesCard],
  templateUrl: './clientes-potenciales.html',
  styleUrl: './clientes-potenciales.scss',
})
export class ClientesPotenciales {
  private loadClientJson = inject(LoadJsonClients);
  homeClientData = this.loadClientJson.homeClientData;

  clientEmail = "";

  removeClient(client:Cliente){
    console.log("parent");
    const updatedClients = this.homeClientData().filter( cliente => cliente.email !== client.email);
    this.loadClientJson.homeClientData.set(updatedClients);
  }
}
