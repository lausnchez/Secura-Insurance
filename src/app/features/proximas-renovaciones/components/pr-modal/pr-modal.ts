import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal-service/modal-service';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'pr-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './pr-modal.html',
  styleUrl: './pr-modal.scss',
})
export class PrModal {
  
  // Services
  modalService = inject(ModalService);

  // Form
  filterForm = new FormGroup({
    numPoliza: new FormControl('numPoliza'),
    nombreRiesgo: new FormControl('nombreRiesgo'),
    fechaInicio: new FormControl('fechaInicio'),
    fechaFinal: new FormControl('fechaFinal'),
    importe: new FormControl('importe'),
    estado: new FormControl('estado'),
  });

}
