import { Injectable, signal, EventEmitter } from '@angular/core';
import { Aspect } from '../../Model/Aspects/Aspect';
import { Aer } from '../../Model/Aspects/Primal/Aer';
import { Aqua } from '../../Model/Aspects/Primal/Aqua';
import { Ignis } from '../../Model/Aspects/Primal/Ignis';
import { Ordo } from '../../Model/Aspects/Primal/Ordo';
import { Perditio } from '../../Model/Aspects/Primal/Perditio';
import { Terra } from '../../Model/Aspects/Primal/Terra';
import { Gelum } from '../../Model/Aspects/Level1/Gelum';
import { Lux } from '../../Model/Aspects/Level1/Lux';
import { Motus } from '../../Model/Aspects/Level1/Motus';
import { Permutatio } from '../../Model/Aspects/Level1/Permutatio';
import { Potentia } from '../../Model/Aspects/Level1/Potentia';
import { Tempestas } from '../../Model/Aspects/Level1/Tempestas';
import { Vacuos } from '../../Model/Aspects/Level1/Vacuos';
import { Vitreus } from '../../Model/Aspects/Level1/Vitreus';
import { Victus } from '../../Model/Aspects/Level1/Victus';
import { Venenum } from '../../Model/Aspects/Level1/Venenum';

@Injectable({
  providedIn: 'root',
})
export class ResearchInventory {

  public readonly ListOfAspectsInventoryPrimal: { aspect: Aspect, count: number }[] = [
    { aspect: new Aer(), count: 10 },
    { aspect: new Aqua(), count: 10 },
    { aspect: new Ignis(), count: 10 },
    { aspect: new Ordo(), count: 10 },
    { aspect: new Perditio(), count: 10 },
    { aspect: new Terra(), count: 10 }
  ];

  public InventoryPrimalSignal = signal(this.ListOfAspectsInventoryPrimal);


  public readonly ListOfAspectsInventoryLevel1: { aspect: Aspect, count: number }[] = [
    { aspect: new Gelum(), count: 10 },
    { aspect: new Lux(), count: 10 },
    { aspect: new Motus(), count: 10 },
    { aspect: new Permutatio(), count: 10 },
    { aspect: new Potentia(), count: 10 },
    { aspect: new Tempestas(), count: 10 },
    { aspect: new Vacuos(), count: 10 },
    { aspect: new Venenum(), count: 10 },
    { aspect: new Victus(), count: 10 },
    { aspect: new Vitreus(), count: 10 },

  ];

  public InventoryLevel1Signal = signal(this.ListOfAspectsInventoryLevel1);


  public inventorySelectionChanged = new EventEmitter<string>();

  changed() {
    this.InventoryPrimalSignal.set([...this.ListOfAspectsInventoryPrimal]);
    this.InventoryLevel1Signal.set([...this.ListOfAspectsInventoryLevel1]);
  }

  getCount(aspect: Aspect): number {
    const entryinPrimal = this.ListOfAspectsInventoryPrimal.find(
      e => e.aspect.constructor.name === aspect.constructor.name
    );
    if (entryinPrimal) {
      return entryinPrimal.count;
    }

    const entryinLevel1 = this.ListOfAspectsInventoryLevel1.find(
      e => e.aspect.constructor.name === aspect.constructor.name
    );
    if (entryinLevel1) {
      return entryinLevel1.count;
    }

    return NaN;
  }

  addInventoryCount(aspect: Aspect, count: number = 1) {
    const entryinPrimal = this.ListOfAspectsInventoryPrimal.find(
      e => e.aspect.constructor.name === aspect.constructor.name
    );
    if (entryinPrimal) {
      entryinPrimal.count += count;
      console.log(aspect);
      console.log(count);
    }

    const entryinLevel1 = this.ListOfAspectsInventoryLevel1.find(
      e => e.aspect.constructor.name === aspect.constructor.name
    );
    if (entryinLevel1) {
      entryinLevel1.count += count;
      console.log(aspect);
      console.log(count);
    }

    console.log("Add Aspect");
    this.changed();
  }

  subInventoryCount(aspect: Aspect, count: number = 1) {
    const entryinPrimal = this.ListOfAspectsInventoryPrimal.find(
      e => e.aspect.constructor.name === aspect.constructor.name
    );
    if (entryinPrimal) {
      entryinPrimal.count -= count;
    }

    const entryinLevel1 = this.ListOfAspectsInventoryLevel1.find(
      e => e.aspect.constructor.name === aspect.constructor.name
    );
    if (entryinLevel1) {
      entryinLevel1.count -= count;
    }

    this.changed();
  }


  private Gold: number = 0;

  public GoldSignal = signal(this.Gold);

  addGold(amount: number) {
    this.Gold = this.Gold + amount;
    this.GoldSignal.set(this.Gold);
  }

  subGold(amount: number) {
    this.Gold = this.Gold - amount;
    this.GoldSignal.set(this.Gold);

  }

  private Rank: number = 0;

  public RankSignal = signal(this.Rank);

  addRank(amount: number) {
    this.Rank = this.Rank + amount;
    this.RankSignal.set(this.Rank);
  }

}
