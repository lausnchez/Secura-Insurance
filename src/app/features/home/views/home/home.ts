import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';


@Component({
  selector: 'home-page',
  imports: [Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
