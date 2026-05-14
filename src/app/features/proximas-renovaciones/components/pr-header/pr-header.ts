import { Component, inject} from '@angular/core';
import { LoadJsonTotalRenovations } from '../../services/load-json-total-renovations/load-json-total-renovations';
@Component({
  selector: 'pr-header',
  imports: [],
  templateUrl: './pr-header.html',
  styleUrl: './pr-header.scss',
})
export class PrHeader {
  renovationService = inject(LoadJsonTotalRenovations);
}
