import { Component, Input, signal } from '@angular/core';
import { ResearchInventory } from '../../../Services/Inventory_Aspects/research-inventory';
import { sign } from 'crypto';
import { ResearchInventoryField } from '../../Research/research-inventory-field/research-inventory-field';
import { ResearchFieldService } from '../../../Services/Research_Field/research-field-Service';
import { EnLevel } from '../../../Model/Aspects/Enum_Level';

@Component({
  selector: 'app-fusion-item',
  imports: [],
  templateUrl: './fusion-item.html',
  styleUrl: './fusion-item.css',
})
export class FusionItem {
  @Input() dis_typ: 'firstComponent' | 'secondComponent' | 'ResultComponent' = 'ResultComponent';

  public title = signal("");
  public IMG = signal("");
  public menge = signal(0);


  constructor(private researchInventory: ResearchInventory, private selected: ResearchFieldService) {
    this.researchInventory.inventorySelectionChanged.subscribe((selection: string) => {
      // Hier kannst du die internen Funktion aufrufen
      console.log("Inventory Selection Changed", selection);
      // Aufruf deiner Funktion
      this.update_View();
    });

    this.title.set("Nothing Selected");
  }

  update_View() {

    // Leere Selection
    if (this.selected.SelectedAspectInventory === null) {
      this.title.set("Nothing Selected.");
      this.IMG.set("");
      this.menge.set(0);
      return;
    }

    // Primal Element
    if (this.selected.SelectedAspectInventory.Level === EnLevel.Primal) {
      this.title.set("Primal does not work.");
      this.IMG.set("");
      this.menge.set(0);
      return;
    }

    if (this.dis_typ === 'firstComponent') {
      this.title.set("First");
    }

    if (this.dis_typ === 'secondComponent') {
      this.title.set("Second");
    }

    if (this.dis_typ === 'ResultComponent') {
      this.title.set("Result");
    }

  }


}
