import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { UserDesplegable } from './user-desplegable/user-desplegable';
import { BurgerDesplegable } from './burger-desplegable/burger-desplegable';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatButtonModule, MatMenuModule, MatIconModule, UserDesplegable, BurgerDesplegable],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  changeLang(lang: string): void {
    document.documentElement.lang = lang;
    // TODO
  }
}
