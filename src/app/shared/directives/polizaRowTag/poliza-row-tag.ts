import { Directive, ElementRef, Input } from '@angular/core';
import { Poliza } from '../../../core/models/poliza.model';

@Directive({
  selector: '[appPolizaRowTag]'
})
export class PolizaRowTag {

  @Input() poliza!: Poliza;

  constructor(private el:ElementRef) {
    // this.el.nativeElement.style.backgroundColor = "crimson";
  }

  getColorByState(){
    switch(this.poliza.state){
      case 'paid':
        this.el.nativeElement.style.backgroundColor = "crimson"
    }
  }



}
