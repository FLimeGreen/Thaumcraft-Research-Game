import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Instrumentum } from "../Level6/Instrumentum";
import { Terra } from "../Primal/Terra";

export class Tutamen extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Tutamen.svg";

    if (ver_emthy) {
      super(EnLevel.Tier7, path_img, [], []);
    } else {
      super(EnLevel.Tier7, path_img, [
        new Terra(true),
        new Instrumentum(true)
      ], [
        new Terra(true),
        new Instrumentum(true)
      ]);
    }
  }
}
