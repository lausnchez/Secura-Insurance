import { ModalService } from './../../services/modal-service/modal-service';
import { Component, inject} from '@angular/core';
import { LoadJsonTotalRenovations } from '../../services/load-json-total-renovations/load-json-total-renovations';
import { BtnGeneral } from '../../../../shared/components/btn-general/btn-general';
import { PrTableRow } from '../pr-table-row/pr-table-row';
import { PrFilterChip } from '../pr-filter-chip/pr-filter-chip';
import { FilterManagement } from '../../services/filter-management/filter-management';

@Component({
  selector: 'pr-renovations-table',
  imports: [BtnGeneral, PrTableRow, PrFilterChip],
  templateUrl: './pr-renovations-table.html',
  styleUrl: './pr-renovations-table.scss',
})
export class PrRenovationsTable {
  renovationsService = inject(LoadJsonTotalRenovations);
  modalService = inject(ModalService);
  filterService = inject(FilterManagement);

  onOrderSelection(event: Event){
    const element = event.target as HTMLSelectElement;
    const value = element.value;
    this.renovationsService.sortRenovations(value);
  }
}
