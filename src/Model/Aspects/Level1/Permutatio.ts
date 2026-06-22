import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Ordo } from "../Primal/Ordo";
import { Perditio } from "../Primal/Perditio";

export class Permutatio extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Permutatio.svg";

    if (ver_emthy) {
      super(EnLevel.Tier1, path_img, [], []);
    } else {
      super(EnLevel.Tier1, path_img, [
        new Ordo(true),
        new Perditio(true)
      ], [
        new Ordo(true),
        new Perditio(true)
      ]);
    }
  }
}
