import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Praecantatio } from "../Level2/Praecantatio";
import { Aer } from "../Primal/Aer";

export class Auram extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Auram.svg";

    if (ver_emthy) {
      super(EnLevel.Tier3, path_img, [], []);
    } else {
      super(EnLevel.Tier3, path_img, [
        new Aer(true),
        new Praecantatio(true)
      ], [
        new Aer(true),
        new Praecantatio(true)
      ]);
    }
  }
}
