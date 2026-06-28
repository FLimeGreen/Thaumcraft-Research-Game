import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Bestia } from "../Level2/Bestia";
import { Fames } from "../Level2/Fames";
import { Herba } from "../Level2/Herba";
import { Limus } from "../Level2/Limus";
import { Mortuus } from "../Level2/Mortuus";
import { Sano } from "../Level2/Sano";
import { Spiritus } from "../Level3/Spiritus";
import { Aqua } from "../Primal/Aqua";
import { Terra } from "../Primal/Terra";

export class Victus extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Victus.svg";

    if (ver_emthy) {
      super(EnLevel.Tier1, path_img, [], []);
    } else {
      super(EnLevel.Tier1, path_img, [
        new Aqua(true),
        new Terra(true)
      ], [
        new Aqua(true),
        new Terra(true),
        new Bestia(true),
        new Fames(true),
        new Herba(true),
        new Limus(true),
        new Mortuus(true),
        new Sano(true),
        new Spiritus(true)
      ]);
    }
  }
}
