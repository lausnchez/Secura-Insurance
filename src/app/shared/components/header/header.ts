import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  imports: [RouterLink, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  changeLang(lang: string): void {
    document.documentElement.lang = lang;
    // TODO
  }
}
