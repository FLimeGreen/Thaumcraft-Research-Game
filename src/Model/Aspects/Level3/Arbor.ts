import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Herba } from "../Level2/Herba";
import { Aer } from "../Primal/Aer";

export class Arbor extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Arbor.svg";

    if (ver_emthy) {
      super(EnLevel.Tier3, path_img, [], []);
    } else {
      super(EnLevel.Tier3, path_img, [
        new Aer(true),
        new Herba(true)
      ], [
        new Aer(true),
        new Herba(true)
      ]);
    }
  }
}
