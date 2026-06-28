import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Metallum } from "../Level2/Metallum";
import { Ordo } from "../Primal/Ordo";
import { Terra } from "../Primal/Terra";

export class Vitreus extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Vitreus.svg";

    if (ver_emthy) {
      super(EnLevel.Tier1, path_img, [], []);
    } else {
      super(EnLevel.Tier1, path_img, [
        new Ordo(true),
        new Terra(true)
      ], [
        new Ordo(true),
        new Terra(true),
        new Metallum(true)
      ]);
    }
  }
}
