import { Injectable, signal } from '@angular/core';
import { Poliza } from '../../../../core/models/poliza.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoadJsonTotalRenovations {
  renovationsData = signal<Poliza[]>([]);

  constructor(private http:HttpClient){
    this.loadRenovationsJson();
  }

  mapState(n: number){
    switch(n){
      case 0:
        return 'Pendiente';
      case 1:
        return 'Pagado';
      case 2:
        return 'Vencido';
      default:
        return 'Pendiente';
    }
  }

  loadRenovationsJson(){
    this.http.get<{ renovations: Poliza[] }>('assets/json/renovations.json').
      subscribe(data =>{
        let renovations = data.renovations.map((p:any) => ({
          ...p,
          state: this.mapState(p.state),
        })); 
        this.renovationsData.set(renovations);
    });
  }
}
