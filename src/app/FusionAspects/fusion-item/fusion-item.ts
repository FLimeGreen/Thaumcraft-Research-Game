import { Component, Input, signal } from '@angular/core';
import { ResearchInventory } from '../../../Services/Inventory_Aspects/research-inventory';
import { sign } from 'crypto';

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


  constructor(private researchInventory: ResearchInventory) {
    this.title.set("Nothing Selected");
  }

  update_View() {
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
