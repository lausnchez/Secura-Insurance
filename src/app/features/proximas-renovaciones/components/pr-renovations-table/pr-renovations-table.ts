import { ModalService } from './../../services/modal-service/modal-service';
import { Component, inject } from '@angular/core';
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

  totalPolizas = this.renovationsService.totalRenovations;
}
