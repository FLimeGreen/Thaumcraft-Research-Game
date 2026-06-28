import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Motus } from "../Level1/Motus";
import { Terra } from "../Primal/Terra";

export class Iter extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Iter.svg";

    if (ver_emthy) {
      super(EnLevel.Tier2, path_img, [], []);
    } else {
      super(EnLevel.Tier2, path_img, [
        new Terra(true),
        new Motus(true)
      ], [
        new Terra(true),
        new Motus(true)
      ]);
    }
  }
}
