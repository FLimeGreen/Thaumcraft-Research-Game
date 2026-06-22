import { Component, signal } from '@angular/core';
import { ResearchInventory } from '../../../Services/Inventory_Aspects/research-inventory';
import { BasarService } from '../../../Services/Basar_Service/basar-service';
import { GoldRankDisplay } from '../../gold-rank-display/gold-rank-display';

@Component({
  selector: 'app-basar-controllline',
  imports: [GoldRankDisplay],
  templateUrl: './basar-controllline.html',
  styleUrl: './basar-controllline.css',
})
export class BasarControllline {

  constructor(private basar: BasarService, private researchInventory: ResearchInventory) { }

  onKaufenClick() {
    const item = this.basar.SelectedItem;

    if (item == null) { return; }

    if (item.gekauft) { return; }

    if (item.preis > this.researchInventory.GoldSignal()) { return; }

    // Kauf durchführen
    this.researchInventory.subGold(item.preis);
    this.researchInventory.addInventoryCount(item.aspect, item.amount);
    item.gekauft = true;
    this.basar.SelectedItem = item;
  }
}
