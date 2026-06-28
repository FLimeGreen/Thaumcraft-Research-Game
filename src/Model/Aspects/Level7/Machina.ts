import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Motus } from "../Level1/Motus";
import { Instrumentum } from "../Level6/Instrumentum";

export class Machina extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Machina.svg";

    if (ver_emthy) {
      super(EnLevel.Tier7, path_img, [], []);
    } else {
      super(EnLevel.Tier7, path_img, [
        new Motus(true),
        new Instrumentum(true)
      ], [
        new Motus(true),
        new Instrumentum(true)
      ]);
    }
  }
}
