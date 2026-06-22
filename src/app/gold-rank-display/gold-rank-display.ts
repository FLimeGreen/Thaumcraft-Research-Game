import { Component, signal } from '@angular/core';
import { ResearchInventory } from '../../Services/Inventory_Aspects/research-inventory';


@Component({
  selector: 'app-gold-rank-display',
  imports: [],
  templateUrl: './gold-rank-display.html',
  styleUrl: './gold-rank-display.css',
})
export class GoldRankDisplay {

  public Gold = signal(0);
  public Rank = signal(0);

  constructor(private researchInventory: ResearchInventory) {
    this.Gold = this.researchInventory.GoldSignal;
    this.Rank = this.researchInventory.RankSignal;
  }


}
