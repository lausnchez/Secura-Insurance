import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  mostrarModal = signal<boolean>(false);
  readonly isOpen = this.mostrarModal.asReadonly();


  toggleModal(){
    this.mostrarModal.update(m =>!m);
  }
  
  setModal(value:boolean){
    this.mostrarModal.set(value);
  }
}
