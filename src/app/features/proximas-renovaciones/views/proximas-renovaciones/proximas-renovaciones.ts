import { Component, inject } from '@angular/core';
import { PrHeader } from '../../components/pr-header/pr-header';
import { PrRenovationsTable } from '../../components/pr-renovations-table/pr-renovations-table';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { LoadJsonTotalRenovations } from '../../services/load-json-total-renovations/load-json-total-renovations';
import { PrModal } from '../../components/pr-modal/pr-modal';

@Component({
  selector: 'app-proximas-renovaciones',
  imports: [PrHeader, PrRenovationsTable, MatPaginatorModule, PrModal],
  templateUrl: './proximas-renovaciones.html',
  styleUrl: './proximas-renovaciones.scss',
})
export class ProximasRenovaciones {
  renovationJsonInjection = inject(LoadJsonTotalRenovations);
  
  onPageChange(event: PageEvent){
    this.renovationJsonInjection.setPagination(event.pageIndex, event.pageSize);
  }

}
