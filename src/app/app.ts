import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResearchView } from './Research/research-view/research-view';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResearchView],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Thaumcraft');
}
