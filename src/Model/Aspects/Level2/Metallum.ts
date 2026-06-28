import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Vitreus } from "../Level1/Vitreus";
import { Terra } from "../Primal/Terra";

export class Metallum extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Metallum.svg";

    if (ver_emthy) {
      super(EnLevel.Tier2, path_img, [], []);
    } else {
      super(EnLevel.Tier2, path_img, [
        new Terra(true),
        new Vitreus(true)
      ], [
        new Terra(true),
        new Vitreus(true)
      ]);
    }
  }
}
