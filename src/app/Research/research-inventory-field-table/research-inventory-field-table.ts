import { Component, Input, WritableSignal } from '@angular/core';
import { ResearchFieldService } from '../../../Services/Research_Field/research-field-Service';
import { Aspect } from '../../../Model/Aspects/Aspect';
import { ResearchInventory } from '../../../Services/Inventory_Aspects/research-inventory';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-research-inventory-field-table',
  imports: [CommonModule],
  templateUrl: './research-inventory-field-table.html',
  styleUrl: './research-inventory-field-table.css',
})
export class ResearchInventoryFieldTable {

  @Input() inventory!: WritableSignal<{ aspect: Aspect, count: number }[]>;

  constructor(public researchFieldService: ResearchFieldService,
    public researchInventory: ResearchInventory
  ) { }

  public onInventoryClick(aspect: Aspect): void {
    this.researchFieldService.SelectedAspectInventory = aspect;
    this.researchInventory.inventorySelectionChanged.emit("");
  }
}
