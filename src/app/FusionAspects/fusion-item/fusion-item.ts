import { Component, Input, signal } from '@angular/core';
import { ResearchInventory } from '../../../Services/Inventory_Aspects/research-inventory';
import { sign } from 'crypto';
import { ResearchInventoryField } from '../../Research/research-inventory-field/research-inventory-field';
import { ResearchFieldService } from '../../../Services/Research_Field/research-field-Service';
import { EnLevel } from '../../../Model/Aspects/Enum_Level';
import { Aspect } from '../../../Model/Aspects/Aspect';

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

    this.update_View();
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

    const SAspect: Aspect = this.selected.SelectedAspectInventory;

    if (this.dis_typ === 'firstComponent') {
      this.title.set(SAspect.Bestandteile[0].constructor.name);
      this.IMG.set(SAspect.Bestandteile[0].IMG);
      this.menge.set(this.researchInventory.getCount(SAspect.Bestandteile[0]));
    }

    if (this.dis_typ === 'secondComponent') {
      this.title.set(SAspect.Bestandteile[1].constructor.name);
      this.IMG.set(SAspect.Bestandteile[1].IMG);
      this.menge.set(this.researchInventory.getCount(SAspect.Bestandteile[1]));
    }

    if (this.dis_typ === 'ResultComponent') {
      this.title.set(SAspect.constructor.name);
      this.IMG.set(SAspect.IMG);
      this.menge.set(this.researchInventory.getCount(SAspect));
    }

  }


}
