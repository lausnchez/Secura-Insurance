import { Component, inject } from '@angular/core';
import { BtnGeneral } from '../../../../shared/components/btn-general/btn-general';
import { PolizaRow } from '../../../../shared/components/poliza-row/poliza-row';
import { LoadHomeJsonService } from '../../services/load-json';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'home-proximas-renovaciones',
  imports: [BtnGeneral, PolizaRow, RouterLink],
  templateUrl: './proximas-renovaciones.html',
  styleUrl: './proximas-renovaciones.scss',
})

export class ProximasRenovaciones {
  private loadJson = inject(LoadHomeJsonService);
  homeData = this.loadJson.homeData;
}
