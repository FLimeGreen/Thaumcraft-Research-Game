import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Victus } from "../Level1/Victus";
import { Aqua } from "../Primal/Aqua";

export class Limus extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Limus.svg";

    if (ver_emthy) {
      super(EnLevel.Tier2, path_img, [], []);
    } else {
      super(EnLevel.Tier2, path_img, [
        new Aqua(true),
        new Victus(true)
      ], [
        new Aqua(true),
        new Victus(true)
      ]);
    }
  }
}
