import { Component, inject } from '@angular/core';
import { LoadJsonTotalRenovations } from '../../services/load-json-total-renovations/load-json-total-renovations';
import { PolizaRow } from '../../../../shared/components/poliza-row/poliza-row';

@Component({
  selector: 'pr-renovations-table',
  imports: [PolizaRow],
  templateUrl: './pr-renovations-table.html',
  styleUrl: './pr-renovations-table.scss',
})
export class PrRenovationsTable {
  private loadJson = inject(LoadJsonTotalRenovations);
  renovationData = this.loadJson.renovationsData;  
  ;
  
}
