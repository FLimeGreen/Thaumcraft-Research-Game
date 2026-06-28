import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Motus } from "../Level1/Motus";
import { Aer } from "../Primal/Aer";

export class Volatus extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Volatus.svg";

    if (ver_emthy) {
      super(EnLevel.Tier2, path_img, [], []);
    } else {
      super(EnLevel.Tier2, path_img, [
        new Aer(true),
        new Motus(true)
      ], [
        new Aer(true),
        new Motus(true)
      ]);
    }
  }
}
