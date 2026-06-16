import { Component, signal } from '@angular/core';
import { ResearchInventory } from '../../../Services/Inventory_Aspects/research-inventory';
import { BasarService } from '../../../Services/Basar_Service/basar-service';

@Component({
  selector: 'app-basar-controllline',
  imports: [],
  templateUrl: './basar-controllline.html',
  styleUrl: './basar-controllline.css',
})
export class BasarControllline {

  public Gold = signal(0);

  constructor(private researchInventory: ResearchInventory,
    private basar: BasarService
  ) {
    this.Gold = this.researchInventory.GoldSignal;
  }

  onKaufenClick() {
    const item = this.basar.SelectedItem;

    if (item == null) { return; }

    if (item.gekauft) { return; }

    if (item.preis > this.Gold()) { return; }

    // Kauf durchführen
    this.researchInventory.subGold(item.preis);
    this.researchInventory.addInventoryCount(item.aspect, item.amount);
    item.gekauft = true;
    this.basar.SelectedItem = item;
  }
}
