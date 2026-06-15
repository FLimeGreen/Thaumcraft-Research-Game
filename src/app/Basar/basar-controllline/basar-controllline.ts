import { Component, signal } from '@angular/core';
import { ResearchInventory } from '../../../Services/Inventory_Aspects/research-inventory';

@Component({
  selector: 'app-basar-controllline',
  imports: [],
  templateUrl: './basar-controllline.html',
  styleUrl: './basar-controllline.css',
})
export class BasarControllline {

  public Gold = signal(0);

  constructor(private researchInventory: ResearchInventory
  ) {
    this.Gold = this.researchInventory.GoldSignal;
  }
}
