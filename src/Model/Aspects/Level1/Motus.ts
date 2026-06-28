import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Bestia } from "../Level2/Bestia";
import { Iter } from "../Level2/Iter";
import { Vinculum } from "../Level2/Vinculum";
import { Volatus } from "../Level2/Volatus";
import { Aer } from "../Primal/Aer";
import { Ordo } from "../Primal/Ordo";

export class Motus extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Motus.svg";

    if (ver_emthy) {
      super(EnLevel.Tier1, path_img, [], []);
    } else {
      super(EnLevel.Tier1, path_img, [
        new Aer(true),
        new Ordo(true)
      ], [
        new Aer(true),
        new Ordo(true),
        new Bestia(true),
        new Iter(true),
        new Vinculum(true),
        new Volatus(true)
      ]);
    }
  }
}
