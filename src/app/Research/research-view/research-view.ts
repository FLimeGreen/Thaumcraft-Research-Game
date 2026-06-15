import { Component } from '@angular/core';
import { ResearchField } from '../research-field/research-field';
import { ResearchInventoryField } from '../research-inventory-field/research-inventory-field';
import { ResearchFieldControllline } from '../research-field-controllline/research-field-controllline';
import { CheatSheet } from '../cheat-sheet/cheat-sheet';


@Component({
  selector: 'app-research-view',
  imports: [ResearchField, ResearchInventoryField, ResearchFieldControllline, CheatSheet],
  templateUrl: './research-view.html',
  styleUrl: './research-view.css',
})
export class ResearchView { }
