import { ModalService } from './../../services/modal-service/modal-service';
import { Component, inject} from '@angular/core';
import { LoadJsonTotalRenovations } from '../../services/load-json-total-renovations/load-json-total-renovations';
import { BtnGeneral } from '../../../../shared/components/btn-general/btn-general';
import { CurrencyPipe} from '@angular/common';
import { PolizaRowTag } from '../../../../shared/directives/polizaRowTag/poliza-row-tag';
import { PrTableRow } from '../pr-table-row/pr-table-row';

@Component({
  selector: 'pr-renovations-table',
  imports: [BtnGeneral, PrTableRow],
  templateUrl: './pr-renovations-table.html',
  styleUrl: './pr-renovations-table.scss',
})
export class PrRenovationsTable {
  renovationsService = inject(LoadJsonTotalRenovations);
  modalService = inject(ModalService);

  onOrderSelection(event: Event){
    const element = event.target as HTMLSelectElement;
    const value = element.value;
    this.renovationsService.sortRenovations(value);
  }
}
