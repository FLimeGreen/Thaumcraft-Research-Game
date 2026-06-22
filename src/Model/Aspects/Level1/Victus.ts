import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
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
        new Terra(true)
      ]);
    }
  }
}
