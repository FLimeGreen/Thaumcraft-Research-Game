import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Instrumentum } from "../Level6/Instrumentum";
import { Ignis } from "../Primal/Ignis";

export class Telum extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Telum.svg";

    if (ver_emthy) {
      super(EnLevel.Tier7, path_img, [], []);
    } else {
      super(EnLevel.Tier7, path_img, [
        new Ignis(true),
        new Instrumentum(true)
      ], [
        new Ignis(true),
        new Instrumentum(true)
      ]);
    }
  }
}
