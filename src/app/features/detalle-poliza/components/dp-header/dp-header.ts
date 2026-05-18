import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadPoliza } from '../../services/load-poliza/load-poliza';

@Component({
  selector: 'dp-header',
  imports: [],
  templateUrl: './dp-header.html',
  styleUrl: './dp-header.scss',
})
export class DpHeader {

  loadPoliza = inject(LoadPoliza);
  router:ActivatedRoute = inject(ActivatedRoute);
  polizaID = 0;

  constructor(){
    this.polizaID = parseInt(this.router.snapshot.params['poliza']);
    this.loadPoliza.getNombrePoliza(this.polizaID);
  }


}
