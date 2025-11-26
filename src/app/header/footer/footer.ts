import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <p>
      footer works!
      {{message}}
    </p>
  `,
  styles: `
  p {
    font-family: Lato, sans-serif;
    background-color: #03f207ff;
    padding: 20px;
  }
  `,
})
export class Footer {
  message = 'This is footer component';
}