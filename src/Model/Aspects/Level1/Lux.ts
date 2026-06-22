import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Aer } from "../Primal/Aer";
import { Ignis } from "../Primal/Ignis";

export class Lux extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Lux.svg";

    if (ver_emthy) {
      super(EnLevel.Tier1, path_img, [], []);
    } else {
      super(EnLevel.Tier1, path_img, [
        new Ignis(true),
        new Aer(true)
      ], [
        new Ignis(true),
        new Aer(true)
      ]);
    }
  }
}
