import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aspect } from '../../Model/Aspects/Aspect';
import { ResearchFieldService } from '../../Services/Research_Field/research-field-Service';
import { ResearchInventory } from '../../Services/Inventory_Aspects/research-inventory';

@Component({
  selector: 'app-research-inventory-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research-inventory-field.html',
  styleUrl: './research-inventory-field.css',
})
export class ResearchInventoryField {
  private researchInventory = inject(ResearchInventory);
  public inventoryPrimal = this.researchInventory.InventoryPrimalSignal;
  public inventoryLevel1 = this.researchInventory.InventoryLevel1Signal;

  constructor(private researchFieldService: ResearchFieldService) { }

  public onInventoryClick(aspect: Aspect): void {
    this.researchFieldService.SelectedAspectInventory = aspect;
  }

  public onClearClick(): void {
    this.researchFieldService.SelectedAspectInventory = null;
  }
}
