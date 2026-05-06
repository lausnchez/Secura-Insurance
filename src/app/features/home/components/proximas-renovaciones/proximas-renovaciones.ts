import { Component, inject } from '@angular/core';
import { BtnGeneral } from '../../../../shared/components/btn-general/btn-general';
import { PolizaRow } from '../../../../shared/components/poliza-row/poliza-row';
import { LoadRenovationsHomeService } from '../../services/load-json-renovations';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'home-proximas-renovaciones',
  imports: [BtnGeneral, PolizaRow, RouterLink],
  templateUrl: './proximas-renovaciones.html',
  styleUrl: './proximas-renovaciones.scss',
})

export class ProximasRenovaciones {
  private loadJson = inject(LoadRenovationsHomeService);
  homeData = this.loadJson.homeData;
}
