import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="app-header">
      <h1>{{ title() }}</h1>
      <nav>
        <ul class="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .app-header {
      background-color: #19d4deff;
      font-family: Lato, sans-serif;
      padding: 20px;
      font-weight: bold;
      animation: pulse 2s infinite;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
    }
    h1 {
      margin: 0;
    }
    .nav-list {
      list-style: none;
      display: flex;
      gap: 15px;
      margin: 0;
      padding: 0;
    }
    .nav-list li a {
      color: white;
      text-decoration: none;
      font-weight: 600;
    }
    .nav-list li a:hover {
      text-decoration: underline;
    }
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
      }
      50% {
        box-shadow: 0 0 10px 10px rgba(3, 116, 242, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(3, 116, 242, 0);
      }
    }
  `],
})
export class Header {
  title = signal('This is header component from signal');
  massage = "hello from the massage variable";
}
