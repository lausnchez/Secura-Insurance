import { Component, Input } from '@angular/core';
import { Poliza } from '../../../core/models/poliza.model';
import { DatePipe, CurrencyPipe, NgClass } from '@angular/common';
import { PolizaRowTag } from '../../directives/polizaRowTag/poliza-row-tag';

@Component({
  selector: 'app-poliza-row',
  imports: [DatePipe, CurrencyPipe, NgClass, PolizaRowTag],
  templateUrl: './poliza-row.html',
  styleUrl: './poliza-row.scss',
})
export class PolizaRow {
  @Input() poliza!: Poliza;
}
