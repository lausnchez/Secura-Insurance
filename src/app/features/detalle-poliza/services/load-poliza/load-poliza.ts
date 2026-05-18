import { Injectable, signal } from '@angular/core';
import { Poliza } from '../../../../core/models/poliza.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoadPoliza {
  
  poliza = signal<Poliza | undefined>(undefined);

  constructor(private http:HttpClient){
    
  }

  getNombrePoliza(id:number){
    this.http.get< {renovations: Poliza[]} >('assets/json/renovations.json').
      subscribe(data =>{
        this.poliza.set(data.renovations.find(p => p.policyNumber == id));
      });
  }
}
