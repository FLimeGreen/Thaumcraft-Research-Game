import { Component, inject } from '@angular/core';
import { Aspect } from '../../../Model/Aspects/Aspect';
import { ResearchFieldService } from '../../../Services/Research_Field/research-field-Service';
import { ResearchInventory } from '../../../Services/Inventory_Aspects/research-inventory';
import { EnLevel } from '../../../Model/Aspects/Enum_Level';
import { GoldRankDisplay } from '../../gold-rank-display/gold-rank-display';

@Component({
  selector: 'app-defusion-controllline',
  imports: [GoldRankDisplay],
  templateUrl: './defusion-controllline.html',
  styleUrl: './defusion-controllline.css',
})
export class DefusionControllline {

  private selected = inject(ResearchFieldService);
  private inventory = inject(ResearchInventory);

  public onDefusionClick() {

    const SAspect: Aspect | null = this.selected.SelectedAspectInventory;

    console.log(SAspect);
    // Wenn Leer oder Primal Fussion nicht möglich
    if (SAspect === null) { return; }
    if (SAspect.Level === EnLevel.Primal) { return; }

    console.log(("Is not null or Primal"));

    // Genung Bestandteile
    if (this.inventory.getCount(SAspect) <= 0) { return; }

    console.log("Hat genung Bestandteile");

    // Genung Gold
    if (this.inventory.GoldSignal() < 10) { return; }

    console.log("Hat genung Gold");

    // Beginne Fusion
    this.inventory.subInventoryCount(SAspect);
    this.inventory.addInventoryCount(SAspect.Bestandteile[0]);
    this.inventory.addInventoryCount(SAspect.Bestandteile[1]);

    this.inventory.subGold(10);
    this.inventory.inventorySelectionChanged.emit("");
  }
}
