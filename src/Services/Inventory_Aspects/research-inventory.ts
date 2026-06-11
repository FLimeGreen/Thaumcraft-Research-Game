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

  public readonly ListOfAspectsInventoryPrimal: Aspect[] = [
    new Aer(true), 
    new Aqua(true), 
    new Ignis(true), 
    new Ordo(true), 
    new Perditio(true), 
    new Terra(true)
  ];

  public readonly ListOfAspectsInventoryLevel1: Aspect[] = [
    new Gelum(true), 
    new Lux(true), 
    new Motus(true), 
    new Permutatio(true), 
    new Potentia(true), 
    new Tempestas(true),
    new Vacuos(true),
    new Venenum(true),
    new Victus(true),
    new Vitreus(true)
  ];

}
