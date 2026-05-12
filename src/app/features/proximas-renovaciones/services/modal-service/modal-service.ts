import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  mostrarModal = signal<boolean>(false);

  getModal():boolean{
    return this.mostrarModal();
  }

  toggleModal(){
    let currentValue = this.mostrarModal();
    this.setModal(!currentValue);
    return this.mostrarModal();
  }
  
  setModal(value:boolean){
    this.mostrarModal.set(value);
  }
}
