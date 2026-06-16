import { Component, signal, Input } from '@angular/core';
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

  public Anzeige = signal("");
  public AspectName = signal("");
  public Amount = signal(0);
  public AspectPrice = signal(0);

  @Input() Item: number = 0

  public ShopItems = signal<{ aspect: Aspect, amount: number, preis: number, gekauft: boolean }[]>([]);

  constructor(basarservice: BasarService) {
    this.ShopItems = basarservice._ShopItems;
  }

}
