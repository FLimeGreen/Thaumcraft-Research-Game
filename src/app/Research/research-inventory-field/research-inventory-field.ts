import { Component, inject, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aspect } from '../../../Model/Aspects/Aspect';
import { ResearchFieldService } from '../../../Services/Research_Field/research-field-Service';
import { ResearchInventory } from '../../../Services/Inventory_Aspects/research-inventory';
import { ResearchInventoryFieldTable } from '../research-inventory-field-table/research-inventory-field-table';

@Component({
  selector: 'app-research-inventory-field',
  standalone: true,
  imports: [CommonModule, ResearchInventoryFieldTable],
  templateUrl: './research-inventory-field.html',
  styleUrl: './research-inventory-field.css',
})
export class ResearchInventoryField {
  private researchInventory = inject(ResearchInventory);

  public inventoryPrimal = this.researchInventory.InventoryPrimalSignal;
  public inventoryLevel1 = this.researchInventory.InventoryLevel1Signal;
  public inventoryLevel2 = this.researchInventory.InventoryLevel2Signal;
  public inventoryLevel3 = this.researchInventory.InventoryLevel3Signal;
  public inventoryLevel4 = this.researchInventory.InventoryLevel4Signal;
  public inventoryLevel5 = this.researchInventory.InventoryLevel5Signal;
  public inventoryLevel6 = this.researchInventory.InventoryLevel6Signal;
  public inventoryLevel7 = this.researchInventory.InventoryLevel7Signal;

  constructor(public researchFieldService: ResearchFieldService, private inventory: ResearchInventory) { }

  public onInventoryClick(aspect: Aspect): void {
    this.researchFieldService.SelectedAspectInventory = aspect;
    this.inventory.inventorySelectionChanged.emit("");
  }

  public onClearClick(): void {
    this.researchFieldService.SelectedAspectInventory = null;
    this.inventory.inventorySelectionChanged.emit("");
  }
}
