import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal-service/modal-service';

@Component({
  selector: 'pr-modal',
  imports: [],
  templateUrl: './pr-modal.html',
  styleUrl: './pr-modal.scss',
})
export class PrModal {
  modalService = inject(ModalService);
}
