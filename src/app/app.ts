import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResearchView } from './Research/research-view/research-view';
import { MenuBar } from './menu-bar/menu-bar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResearchView, MenuBar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Thaumcraft');
}
