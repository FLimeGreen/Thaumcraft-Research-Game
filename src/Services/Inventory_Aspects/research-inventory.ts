import { Injectable } from '@angular/core';
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

}
