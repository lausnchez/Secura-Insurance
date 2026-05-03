import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { ProximasRenovaciones } from '../../components/proximas-renovaciones/proximas-renovaciones';
import { ClientesPotenciales } from '../../components/clientes-potenciales/clientes-potenciales';

@Component({
  selector: 'home-page',
  imports: [Hero, ProximasRenovaciones, ClientesPotenciales],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
