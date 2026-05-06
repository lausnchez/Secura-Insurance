import { Injectable, signal } from '@angular/core';
import { Cliente } from '../../../core/models/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoadJsonClients {
  homeClientData = signal<Cliente[]>([]);

  constructor(private http: HttpClient){
    this.loadClientJson();
  }

  loadClientJson(){
    this.http.get<{ clients: Cliente[]}>('assets/json/home.json').
      subscribe(data =>{
        this.homeClientData.set(data.clients);
      });
  }
}
