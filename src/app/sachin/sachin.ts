import { Component } from '@angular/core';

@Component({
  selector: 'app-sachin',
  imports: [],
  templateUrl: './sachin.html',
  styleUrl: './sachin.scss',
  template: `
    <h1>
      {{title}} 
    </h1>
  `,
  styles: `
    h1 {
      font-family: Lato, sans-serif;
      background-color: #f2d203ff;
      padding: 20px;
    }
  `,
})
export class Sachin {
  title = 'Sachin Tendulkar';
}
