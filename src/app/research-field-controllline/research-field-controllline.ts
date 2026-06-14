import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchFieldService } from '../../Services/Research_Field/research-field-Service';
import { ResearchInventory } from '../../Services/Inventory_Aspects/research-inventory';
import { CheatSheet } from '../cheat-sheet/cheat-sheet';
import { CheatSheetService } from '../../Services/CheatSheet/cheat-sheet-service';

@Component({
  selector: 'app-research-field-controllline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research-field-controllline.html',
  styleUrl: './research-field-controllline.css',
})
export class ResearchFieldControllline {

  public AnzeigeCompleteResearch = signal("Not Checked");

  public AnzeigeCompleteResearchBool = signal(false);

  public Gold = signal(0);

  constructor(private researchFieldService: ResearchFieldService,
    private researchInventory: ResearchInventory,
    private CheatSheet: CheatSheetService
  ) {
    this.Gold = this.researchInventory.GoldSignal;
  }


  onCheckClick(): void {
    console.log("Check Research Start");
    const valid = this.researchFieldService.checkifResearchIsComplete();
    console.log(valid);
    this.AnzeigeCompleteResearch.set(valid ? "Research Complete" : "Research Incomplete");
    this.AnzeigeCompleteResearchBool.set(valid);
  }

  onNewResearchClick(): void {
    console.log("New Research Start");
    this.researchFieldService.generateNewResearch();
    this.researchInventory.addGold(25 * this.researchFieldService.getHecagonLockCount());
    this.AnzeigeCompleteResearch.set("Not Checked");
    this.AnzeigeCompleteResearchBool.set(false);
  }

  onCheatSheetClick() {
    this.CheatSheet.onChange();
  }
}
