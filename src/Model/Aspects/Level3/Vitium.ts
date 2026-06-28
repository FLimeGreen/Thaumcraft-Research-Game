import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Praecantatio } from "../Level2/Praecantatio";
import { Perditio } from "../Primal/Perditio";

export class Vitium extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Vitium.svg";

    if (ver_emthy) {
      super(EnLevel.Tier3, path_img, [], []);
    } else {
      super(EnLevel.Tier3, path_img, [
        new Perditio(true),
        new Praecantatio(true)
      ], [
        new Perditio(true),
        new Praecantatio(true)
      ]);
    }
  }
}
