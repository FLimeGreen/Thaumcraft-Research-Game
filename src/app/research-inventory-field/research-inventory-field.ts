import { Component } from '@angular/core';
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

  public inventoryPrimal: { aspect: Aspect, count: number }[] = [];
  public inventoryLevel1: { aspect: Aspect, count: number }[] = [];

  constructor(private researchFieldService: ResearchFieldService, private researchInventory: ResearchInventory) {
    this.inventoryPrimal = this.researchInventory.ListOfAspectsInventoryPrimal;
    this.inventoryLevel1 = this.researchInventory.ListOfAspectsInventoryLevel1;
  }

  public onInventoryClick(aspect: Aspect): void {
    this.researchFieldService.SelectedAspectInventory = aspect;
  }

  public onClearClick(): void {
    this.researchFieldService.SelectedAspectInventory = null;
  }
}
