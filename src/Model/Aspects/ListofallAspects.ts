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
import { Bestia } from './Level2/Bestia';
import { Fames } from './Level2/Fames';
import { Herba } from './Level2/Herba';
import { Iter } from './Level2/Iter';
import { Limus } from './Level2/Limus';
import { Metallum } from './Level2/Metallum';
import { Mortuus } from './Level2/Mortuus';
import { Praecantatio } from './Level2/Praecantatio';
import { Sano } from './Level2/Sano';
import { Tenebrae } from './Level2/Tenebrae';
import { Vinculum } from './Level2/Vinculum';
import { Volatus } from './Level2/Volatus';
import { Alienis } from './Level3/Alienis';
import { Arbor } from './Level3/Arbor';
import { Auram } from './Level3/Auram';
import { Corpus } from './Level3/Corpus';
import { Exanimis } from './Level3/Exanimis';
import { Spiritus } from './Level3/Spiritus';
import { Vitium } from './Level3/Vitium';
import { Cognitio } from './Level4/Cognitio';
import { Sensus } from './Level4/Sensus';
import { Humanus } from './Level5/Humanus';
import { Instrumentum } from './Level6/Instrumentum';
import { Lucrum } from './Level6/Lucrum';
import { Messis } from './Level6/Messis';
import { Perfodio } from './Level6/Perfodio';
import { Fabrico } from './Level7/Fabrico';
import { Machina } from './Level7/Machina';
import { Meto } from './Level7/Meto';
import { Pannus } from './Level7/Pannus';
import { Telum } from './Level7/Telum';
import { Tutamen } from './Level7/Tutamen';

export class ListofallAspects {

  public static readonly ListOfAllAspects: Aspect[] = [
    new Aer(),
    new Aqua(),
    new Ignis(),
    new Ordo(),
    new Perditio(),
    new Terra(),
    new Gelum(),
    new Lux(),
    new Motus(),
    new Permutatio(),
    new Potentia(),
    new Tempestas(),
    new Vacuos(),
    new Venenum(),
    new Victus(),
    new Vitreus(),
    new Bestia,
    new Fames(),
    new Herba(),
    new Iter(),
    new Limus(),
    new Metallum(),
    new Mortuus(),
    new Praecantatio(),
    new Sano(),
    new Tenebrae(),
    new Vinculum(),
    new Volatus(),
    new Alienis(),
    new Arbor(),
    new Auram(),
    new Corpus(),
    new Exanimis(),
    new Spiritus(),
    new Vitium(),
    new Cognitio(),
    new Sensus(),
    new Humanus(),
    new Instrumentum(),
    new Lucrum(),
    new Messis(),
    new Perfodio(),
    new Fabrico(),
    new Machina(),
    new Meto(),
    new Pannus(),
    new Telum(),
    new Tutamen()
  ];

  public static readonly ListOfAspectsPrimal: Aspect[] = [
    new Aer(),
    new Aqua(),
    new Ignis(),
    new Ordo(),
    new Perditio(),
    new Terra()
  ];

  public static readonly ListOfAspectsLevel1: Aspect[] = [
    new Gelum(),
    new Lux(),
    new Motus(),
    new Permutatio(),
    new Potentia(),
    new Tempestas(),
    new Vacuos(),
    new Venenum(),
    new Victus(),
    new Vitreus()
  ];

  public static readonly ListOfAspectsLevel2: Aspect[] = [
    new Bestia,
    new Fames(),
    new Herba(),
    new Iter(),
    new Limus(),
    new Metallum(),
    new Mortuus(),
    new Praecantatio(),
    new Sano(),
    new Tenebrae(),
    new Vinculum(),
    new Volatus()
  ];

  public static readonly ListOfAspectsLevel3: Aspect[] = [
    new Alienis(),
    new Arbor(),
    new Auram(),
    new Corpus(),
    new Exanimis(),
    new Spiritus(),
    new Vitium()
  ];

  public static readonly ListOfAspectsLevel4: Aspect[] = [
    new Cognitio(),
    new Sensus()
  ];

  public static readonly ListOfAspectsLevel5: Aspect[] = [
    new Humanus()
  ];

  public static readonly ListOfAspectsLevel6: Aspect[] = [
    new Instrumentum(),
    new Lucrum(),
    new Messis(),
    new Perfodio()
  ];

  public static readonly ListOfAspectsLevel7: Aspect[] = [
    new Fabrico(),
    new Machina(),
    new Meto(),
    new Pannus(),
    new Telum(),
    new Tutamen()
  ];
}
