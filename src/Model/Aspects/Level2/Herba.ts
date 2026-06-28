import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Victus } from "../Level1/Victus";
import { Arbor } from "../Level3/Arbor";
import { Messis } from "../Level6/Messis";
import { Terra } from "../Primal/Terra";

export class Herba extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Herba.svg";

    if (ver_emthy) {
      super(EnLevel.Tier2, path_img, [], []);
    } else {
      super(EnLevel.Tier2, path_img, [
        new Terra(true),
        new Victus(true)
      ], [
        new Terra(true),
        new Victus(true),
        new Arbor(true),
        new Messis(true)
      ]);
    }
  }
}
