import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aspect } from '../../Model/Aspects/Aspect';
import { ResearchFieldService } from '../../Services/Research_Field/research-field-Service';

@Component({
  selector: 'app-research-inventory-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research-inventory-field.html',
  styleUrl: './research-inventory-field.css',
})
export class ResearchInventoryField {

  public inventory: Aspect[] = [];

  constructor(private researchFieldService: ResearchFieldService) {
    this.inventory = this.researchFieldService.ListOfAspectsInventory;
  }

  public onInventoryClick(aspect: Aspect): void {
    this.researchFieldService.SelectedAspectInventory = aspect;
  }
}
