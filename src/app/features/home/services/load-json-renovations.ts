import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Poliza } from '../../../core/models/poliza.model';

@Injectable({
  providedIn: 'root',
})
export class LoadRenovationsHomeService {
  homeData = signal<Poliza[]>([]);

  constructor(private http: HttpClient){
      this.loadJson();
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

  loadJson(){
    this.http.get<{ renovations: Poliza[] }>('assets/json/home.json').
      subscribe(data =>{
        let renovations = data.renovations.map((p:any) => ({
          ...p,
          state: this.mapState(p.state),
        }));

        this.homeData.set(renovations);
      });
  }
}
