import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadDetallesPoliza {


  // payments = signal<>();

  constructor(private http:HttpClient){ }
}
