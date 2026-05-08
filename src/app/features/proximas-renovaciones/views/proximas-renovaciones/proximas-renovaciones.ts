import { Component } from '@angular/core';
import { PrHeader } from '../../components/pr-header/pr-header';


@Component({
  selector: 'app-proximas-renovaciones',
  imports: [PrHeader],
  templateUrl: './proximas-renovaciones.html',
  styleUrl: './proximas-renovaciones.scss',
})
export class ProximasRenovaciones {
  totalPolizas = 0;
}
