import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResearchField } from './research-field/research-field';
import { ResearchInventoryField } from './research-inventory-field/research-inventory-field';
import { ResearchFieldControllline } from './research-field-controllline/research-field-controllline';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResearchField, ResearchInventoryField, ResearchFieldControllline],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Thaumcraft');
}
