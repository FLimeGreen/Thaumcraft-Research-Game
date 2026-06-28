import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Fames } from "../Level2/Fames";
import { Praecantatio } from "../Level2/Praecantatio";
import { Tenebrae } from "../Level2/Tenebrae";
import { Aer } from "../Primal/Aer";
import { Perditio } from "../Primal/Perditio";

export class Vacuos extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Vacuos.svg";

    if (ver_emthy) {
      super(EnLevel.Tier1, path_img, [], []);
    } else {
      super(EnLevel.Tier1, path_img, [
        new Aer(true),
        new Perditio(true)
      ], [
        new Aer(true),
        new Perditio(true),
        new Fames(true),
        new Praecantatio(true),
        new Tenebrae(true)
      ]);
    }
  }
}
