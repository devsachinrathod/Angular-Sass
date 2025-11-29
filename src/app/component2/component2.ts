import { Component } from '@angular/core';
import { Sachin } from '../sachin/sachin';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [], // Add required components/modules here
  template: `
    <p>
      component2 works!
      {{ message }}
      {{ sachin }}
    </p>
    <h2>Sachin Component inside Component2</h2>
  `,
  styles: ``,
})
export class Component2 {
  message: string = 'Hello from Component2';
  sachin = Sachin; // If Sachin is a variable/class you want to display
}
