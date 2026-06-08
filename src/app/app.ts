import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResearchField } from './research-field/research-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResearchField],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Thaumcraft');
}
