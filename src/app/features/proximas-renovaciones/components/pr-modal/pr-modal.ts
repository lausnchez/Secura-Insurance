import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal-service/modal-service';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { FilterManagement } from '../../services/filter-management/filter-management';
import { Filter } from '../../../../core/models/filter.model';
import { LoadJsonTotalRenovations } from '../../services/load-json-total-renovations/load-json-total-renovations';
import { BtnGeneral } from '../../../../shared/components/btn-general/btn-general';

@Component({
  selector: 'pr-modal',
  imports: [ReactiveFormsModule, BtnGeneral],
  templateUrl: './pr-modal.html',
  styleUrl: './pr-modal.scss',
})
export class PrModal {
  
  // Services
  modalService = inject(ModalService);
  filterService = inject(FilterManagement);
  renovationsService = inject(LoadJsonTotalRenovations);

  // Form
  filterForm = new FormGroup({
    numPoliza: new FormControl(''),
    nombreRiesgo: new FormControl(''),
    fechaInicio: new FormControl(''),
    fechaFinal: new FormControl(''),
    importe: new FormControl(''),
    estado: new FormControl(''),
  });

  generateFilters(){
    const values = this.filterForm.getRawValue();

    const filters: Filter[] = [
      values.numPoliza?.trim() ? { id: 'numPoliza', type: 'numPoliza', value: values.numPoliza } : null,
      values.nombreRiesgo?.trim() ? { id: 'nombreRiesgo', type: 'nombreRiesgo', value: values.nombreRiesgo } : null,
      values.fechaInicio ? { id: 'fechaInicio', type: 'fechaInicio', value: values.fechaInicio } : null,
      values.fechaFinal ? { id: 'fechaFinal', type: 'fechaFinal', value: values.fechaFinal } : null,
      values.importe?.trim() ? { id: 'importe', type: 'importe', value: values.importe } : null,
      values.estado?.trim() ? { id: 'estado', type: 'estado', value: values.estado } : null,
    ].filter((filter): filter is Filter => filter !== null);

    this.filterService.setFilters(filters);
    this.renovationsService.setPagination(0, this.renovationsService.pageSize());
    this.modalService.setModal(false);
  }

  

  deleteAllFilters(){
    this.filterForm.setValue({
      numPoliza: '',
      nombreRiesgo: '',
      fechaInicio: '',
      fechaFinal: '',
      importe: '',
      estado: '',
    });
    this.filterService.clearAllFilters();
  }

}
