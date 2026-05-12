import { Component, inject, Input } from '@angular/core';
import { PrHeader } from '../../components/pr-header/pr-header';
import { PrRenovationsTable } from '../../components/pr-renovations-table/pr-renovations-table';
import { PolizaRow } from '../../../../shared/components/poliza-row/poliza-row';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { LoadJsonTotalRenovations } from '../../services/load-json-total-renovations/load-json-total-renovations';

@Component({
  selector: 'app-proximas-renovaciones',
  imports: [PrHeader, PrRenovationsTable, MatPaginatorModule],
  templateUrl: './proximas-renovaciones.html',
  styleUrl: './proximas-renovaciones.scss',
})
export class ProximasRenovaciones {
  renovationJsonInjection = inject(LoadJsonTotalRenovations);
  
  onPageChange(event: PageEvent){
    this.renovationJsonInjection.setPagination(event.pageIndex, event.pageSize);
  }

}
