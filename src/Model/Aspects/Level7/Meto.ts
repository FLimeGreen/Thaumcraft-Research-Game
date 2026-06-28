import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Instrumentum } from "../Level6/Instrumentum";
import { Messis } from "../Level6/Messis";

export class Meto extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Meto.svg";

    if (ver_emthy) {
      super(EnLevel.Tier7, path_img, [], []);
    } else {
      super(EnLevel.Tier7, path_img, [
        new Instrumentum(true),
        new Messis(true)
      ], [
        new Instrumentum(true),
        new Messis(true)
      ]);
    }
  }
}
