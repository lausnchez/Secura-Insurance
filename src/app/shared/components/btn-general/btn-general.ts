import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-general',
  imports: [NgClass],
  templateUrl: './btn-general.html',
  styleUrl: './btn-general.scss',
})
export class BtnGeneral {
  @Input() textContent:string = '';
  @Input() variant: 'basic' | 'white' = 'basic';
}
