import { Filter } from './../../../../core/models/filter.model';
import { Component, inject, Input } from '@angular/core';
import { LoadJsonTotalRenovations } from '../../services/load-json-total-renovations/load-json-total-renovations';
import { FilterManagement } from '../../services/filter-management/filter-management';

@Component({
  selector: 'pr-filter-chip',
  imports: [],
  templateUrl: './pr-filter-chip.html',
  styleUrl: './pr-filter-chip.scss',
})
export class PrFilterChip {
  renovationsServie = inject(LoadJsonTotalRenovations);
  filterService = inject(FilterManagement);

  @Input() filter!:Filter;
}
