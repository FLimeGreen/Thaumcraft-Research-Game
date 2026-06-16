import { Component, signal } from '@angular/core';
import { BasarService } from '../../../Services/Basar_Service/basar-service';
import { Aspect } from '../../../Model/Aspects/Aspect';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-basar-single-item-display',
  imports: [NgFor],
  templateUrl: './basar-single-item-display.html',
  styleUrl: './basar-single-item-display.css',
})
export class BasarSingleItemDisplay {

  public ShopItems = signal<{ aspect: Aspect, amount: number, preis: number, gekauft: boolean }[]>([]);

  constructor(public basarservice: BasarService) {
    this.ShopItems = this.basarservice._ShopItems;
  }

  onItemClick(item: { aspect: Aspect, amount: number, preis: number, gekauft: boolean }) {
    this.basarservice.SelectedItem = item;
  }

}
