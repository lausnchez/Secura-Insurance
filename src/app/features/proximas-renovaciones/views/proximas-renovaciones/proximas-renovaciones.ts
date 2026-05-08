import { Component } from '@angular/core';
import { PrHeader } from '../../components/pr-header/pr-header';
import { PrRenovationsTable } from '../../components/pr-renovations-table/pr-renovations-table';
import { PolizaRow } from '../../../../shared/components/poliza-row/poliza-row';


@Component({
  selector: 'app-proximas-renovaciones',
  imports: [PrHeader, PrRenovationsTable, PolizaRow],
  templateUrl: './proximas-renovaciones.html',
  styleUrl: './proximas-renovaciones.scss',
})
export class ProximasRenovaciones {
  totalPolizas = 0;
}
