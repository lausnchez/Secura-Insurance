import { ModalService } from './../../services/modal-service/modal-service';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { LoadJsonTotalRenovations } from '../../services/load-json-total-renovations/load-json-total-renovations';

@Component({
  selector: 'pr-renovations-table',
  imports: [],
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

  toStringDateFormat(date:Date):string{
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    return `${day}/${month}/${year}`;
  }
}
