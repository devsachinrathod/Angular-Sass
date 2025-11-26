import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './header/footer/footer';
import { Sachin } from './sachin/sachin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Sachin],
  template: `
<app-header></app-header>
<app-footer></app-footer>
<app-sachin></app-sachin>

  `,
  styles: [
    `p {
      font-family: Lato, sans-serif;
      background-color: #f20303ff;
      padding: 20px;
    }`
  ],
})
export class App {
  protected readonly title = signal('angular-app-1');
}
