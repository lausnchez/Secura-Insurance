import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Poliza } from '../../../core/models/poliza.model';

@Injectable({
  providedIn: 'root',
})
export class LoadHomeJsonService {
  homeData = signal<Poliza[]>([]);

  constructor(private http: HttpClient){
      this.loadJson();
  }

  loadJson(){
    this.http.get<{ renovations: Poliza[] }>('assets/json/home.json').
      subscribe(data =>{
        this.homeData.set(data.renovations);
      });
  }
}
