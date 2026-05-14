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

    const toText = (value: unknown): string => {
      if (value === null || value === undefined) {
        return '';
      }
      return String(value).trim();
    };

    const numPoliza = toText(values.numPoliza);
    const nombreRiesgo = toText(values.nombreRiesgo);
    const fechaInicio = toText(values.fechaInicio);
    const fechaFinal = toText(values.fechaFinal);
    const importe = toText(values.importe);
    const estado = toText(values.estado);

    const filters: Filter[] = [
      numPoliza ? { id: 'numPoliza', type: 'numPoliza', value: numPoliza } : null,
      nombreRiesgo ? { id: 'nombreRiesgo', type: 'nombreRiesgo', value: nombreRiesgo } : null,
      fechaInicio ? { id: 'fechaInicio', type: 'fechaInicio', value: fechaInicio } : null,
      fechaFinal ? { id: 'fechaFinal', type: 'fechaFinal', value: fechaFinal } : null,
      importe ? { id: 'importe', type: 'importe', value: importe } : null,
      estado ? { id: 'estado', type: 'estado', value: estado } : null,
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
