import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Victus } from "../Level1/Victus";
import { Ordo } from "../Primal/Ordo";

export class Sano extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Sano.svg";

    if (ver_emthy) {
      super(EnLevel.Tier2, path_img, [], []);
    } else {
      super(EnLevel.Tier2, path_img, [
        new Ordo(true),
        new Victus(true)
      ], [
        new Ordo(true),
        new Victus(true)
      ]);
    }
  }
}
