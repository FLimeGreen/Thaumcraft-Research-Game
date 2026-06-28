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
import { Bestia } from '../../Model/Aspects/Level2/Bestia';
import { Fames } from '../../Model/Aspects/Level2/Fames';
import { Herba } from '../../Model/Aspects/Level2/Herba';
import { Iter } from '../../Model/Aspects/Level2/Iter';
import { Limus } from '../../Model/Aspects/Level2/Limus';
import { Metallum } from '../../Model/Aspects/Level2/Metallum';
import { Mortuus } from '../../Model/Aspects/Level2/Mortuus';
import { Praecantatio } from '../../Model/Aspects/Level2/Praecantatio';
import { Sano } from '../../Model/Aspects/Level2/Sano';
import { Tenebrae } from '../../Model/Aspects/Level2/Tenebrae';
import { Vinculum } from '../../Model/Aspects/Level2/Vinculum';
import { Volatus } from '../../Model/Aspects/Level2/Volatus';
import { Alienis } from '../../Model/Aspects/Level3/Alienis';
import { Arbor } from '../../Model/Aspects/Level3/Arbor';
import { Auram } from '../../Model/Aspects/Level3/Auram';
import { Corpus } from '../../Model/Aspects/Level3/Corpus';
import { Exanimis } from '../../Model/Aspects/Level3/Exanimis';
import { Spiritus } from '../../Model/Aspects/Level3/Spiritus';
import { Vitium } from '../../Model/Aspects/Level3/Vitium';
import { Cognitio } from '../../Model/Aspects/Level4/Cognitio';
import { Sensus } from '../../Model/Aspects/Level4/Sensus';
import { Humanus } from '../../Model/Aspects/Level5/Humanus';
import { Instrumentum } from '../../Model/Aspects/Level6/Instrumentum';
import { Lucrum } from '../../Model/Aspects/Level6/Lucrum';
import { Messis } from '../../Model/Aspects/Level6/Messis';
import { Perfodio } from '../../Model/Aspects/Level6/Perfodio';
import { Fabrico } from '../../Model/Aspects/Level7/Fabrico';
import { Machina } from '../../Model/Aspects/Level7/Machina';
import { Meto } from '../../Model/Aspects/Level7/Meto';
import { Pannus } from '../../Model/Aspects/Level7/Pannus';
import { Telum } from '../../Model/Aspects/Level7/Telum';
import { Tutamen } from '../../Model/Aspects/Level7/Tutamen';

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


  public readonly ListOfAspectsInventoryLevel2: { aspect: Aspect, count: number }[] = [
    { aspect: new Bestia(), count: 10 },
    { aspect: new Fames(), count: 10 },
    { aspect: new Herba(), count: 10 },
    { aspect: new Iter(), count: 10 },
    { aspect: new Limus(), count: 10 },
    { aspect: new Metallum(), count: 10 },
    { aspect: new Mortuus(), count: 10 },
    { aspect: new Praecantatio(), count: 10 },
    { aspect: new Sano(), count: 10 },
    { aspect: new Tenebrae(), count: 10 },
    { aspect: new Vinculum(), count: 10 },
    { aspect: new Volatus(), count: 10 }
  ];

  public InventoryLevel2Signal = signal(this.ListOfAspectsInventoryLevel2);


  public readonly ListOfAspectsInventoryLevel3: { aspect: Aspect, count: number }[] = [
    { aspect: new Alienis(), count: 10 },
    { aspect: new Arbor(), count: 10 },
    { aspect: new Auram(), count: 10 },
    { aspect: new Corpus(), count: 10 },
    { aspect: new Exanimis(), count: 10 },
    { aspect: new Spiritus(), count: 10 },
    { aspect: new Vitium(), count: 10 }
  ];

  public InventoryLevel3Signal = signal(this.ListOfAspectsInventoryLevel3);


  public readonly ListOfAspectsInventoryLevel4: { aspect: Aspect, count: number }[] = [
    { aspect: new Cognitio(), count: 10 },
    { aspect: new Sensus(), count: 10 }
  ];

  public InventoryLevel4Signal = signal(this.ListOfAspectsInventoryLevel4);


  public readonly ListOfAspectsInventoryLevel5: { aspect: Aspect, count: number }[] = [
    { aspect: new Humanus(), count: 10 }
  ];

  public InventoryLevel5Signal = signal(this.ListOfAspectsInventoryLevel5);


  public readonly ListOfAspectsInventoryLevel6: { aspect: Aspect, count: number }[] = [
    { aspect: new Instrumentum(), count: 10 },
    { aspect: new Lucrum(), count: 10 },
    { aspect: new Messis(), count: 10 },
    { aspect: new Perfodio(), count: 10 }
  ];

  public InventoryLevel6Signal = signal(this.ListOfAspectsInventoryLevel6);


  public readonly ListOfAspectsInventoryLevel7: { aspect: Aspect, count: number }[] = [
    { aspect: new Fabrico(), count: 10 },
    { aspect: new Machina(), count: 10 },
    { aspect: new Meto(), count: 10 },
    { aspect: new Pannus(), count: 10 },
    { aspect: new Telum(), count: 10 },
    { aspect: new Tutamen(), count: 10 }
  ];

  public InventoryLevel7Signal = signal(this.ListOfAspectsInventoryLevel7);

  public inventorySelectionChanged = new EventEmitter<string>();

  changed() {
    this.InventoryPrimalSignal.set([...this.ListOfAspectsInventoryPrimal]);
    this.InventoryLevel1Signal.set([...this.ListOfAspectsInventoryLevel1]);
    this.InventoryLevel2Signal.set([...this.ListOfAspectsInventoryLevel2]);
    this.InventoryLevel3Signal.set([...this.ListOfAspectsInventoryLevel3]);
    this.InventoryLevel4Signal.set([...this.ListOfAspectsInventoryLevel4]);
    this.InventoryLevel5Signal.set([...this.ListOfAspectsInventoryLevel5]);
    this.InventoryLevel6Signal.set([...this.ListOfAspectsInventoryLevel6]);
    this.InventoryLevel7Signal.set([...this.ListOfAspectsInventoryLevel7]);
  }

  private readonly allInventories = () => [
    this.ListOfAspectsInventoryPrimal,
    this.ListOfAspectsInventoryLevel1,
    this.ListOfAspectsInventoryLevel2,
    this.ListOfAspectsInventoryLevel3,
    this.ListOfAspectsInventoryLevel4,
    this.ListOfAspectsInventoryLevel5,
    this.ListOfAspectsInventoryLevel6,
    this.ListOfAspectsInventoryLevel7
  ];

  private findEntry(aspect: Aspect) {
    const name = aspect.constructor.name;
    for (const list of this.allInventories()) {
      const entry = list.find(e => e.aspect.constructor.name === name);
      if (entry) return entry;
    }
    return null;
  }

  getCount(aspect: Aspect): number {
    return this.findEntry(aspect)?.count ?? NaN;
  }

  addInventoryCount(aspect: Aspect, count: number = 1) {
    const entry = this.findEntry(aspect);
    if (entry) {
      entry.count += count;
      console.log(aspect, count);
    }
    this.changed();
  }

  subInventoryCount(aspect: Aspect, count: number = 1) {
    const entry = this.findEntry(aspect);
    if (entry) {
      entry.count -= count;
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
