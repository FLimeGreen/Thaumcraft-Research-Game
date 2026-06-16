import { Injectable, signal } from '@angular/core';
import { Aspect } from '../../Model/Aspects/Aspect';
import { ListofallAspects } from '../../Model/Aspects/ListofallAspects';
import { randomNumber } from '../../Model/randomNumber';


@Injectable({
  providedIn: 'root',
})
export class BasarService {

  public _ShopItems = signal<{ aspect: Aspect, amount: number, preis: number, gekauft: boolean }[]>([]);

  public SelectedItem: { aspect: Aspect, amount: number, preis: number, gekauft: boolean } | null = null;

  constructor() {
    this.GenerateBasarInventory();
  }

  public GenerateBasarInventory() {

    let _ShopItmes: { aspect: Aspect, amount: number, preis: number, gekauft: boolean }[] = [];
    this.SelectedItem = null;

    for (let i = 0; i < 8; i++) {

      // Get Aspect
      const aspectClass = ListofallAspects.ListOfAllAspects[randomNumber(ListofallAspects.ListOfAllAspects.length)];

      // Get Amount
      const _amount = randomNumber(1, 5);

      // Get Price
      const _preis = ((aspectClass.Level as number) + 1) * 15 * _amount;

      _ShopItmes.push({ aspect: aspectClass, amount: _amount, preis: _preis, gekauft: false });
    }

    this._ShopItems.set(_ShopItmes);
  }
}
