import { Component, Input } from '@angular/core';
import { Poliza } from '../../../../core/models/poliza.model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { PolizaRowTag } from '../../../../shared/directives/polizaRowTag/poliza-row-tag';

@Component({
  selector: 'pr-table-row',
  imports: [CurrencyPipe, NgClass, PolizaRowTag],
  templateUrl: './pr-table-row.html',
  styleUrl: './pr-table-row.scss',
})
export class PrTableRow {
  @Input() poliza!:Poliza;

  toStringDateFormat(date:Date):string{
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    return `${day}/${month}/${year}`;
  }
}
