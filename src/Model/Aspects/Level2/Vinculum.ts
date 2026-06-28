import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Motus } from "../Level1/Motus";
import { Perditio } from "../Primal/Perditio";

export class Vinculum extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Vinculum.svg";

    if (ver_emthy) {
      super(EnLevel.Tier1, path_img, [], []);
    } else {
      super(EnLevel.Tier1, path_img, [
        new Perditio(true),
        new Motus(true)
      ], [
        new Perditio(true),
        new Motus(true)
      ]);
    }
  }
}
