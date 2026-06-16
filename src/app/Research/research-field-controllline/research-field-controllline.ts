import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchFieldService } from '../../../Services/Research_Field/research-field-Service';
import { ResearchInventory } from '../../../Services/Inventory_Aspects/research-inventory';
import { CheatSheetService } from '../../../Services/CheatSheet/cheat-sheet-service';
import { BasarService } from '../../../Services/Basar_Service/basar-service';

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
    private basar: BasarService,
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

    // Addiert Gold
    this.researchInventory.addGold(25 * this.researchFieldService.getHecagonLockCount());

    // Gerneriert neues Forschung
    this.researchFieldService.generateNewResearch();
    this.AnzeigeCompleteResearch.set("Not Checked");
    this.AnzeigeCompleteResearchBool.set(false);

    // New Basar
    this.basar.GenerateBasarInventory();
  }

  onCheatSheetClick() {
    this.CheatSheet.onChange();
  }
}
