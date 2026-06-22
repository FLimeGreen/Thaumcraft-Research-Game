import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Aqua } from "../Primal/Aqua";
import { Perditio } from "../Primal/Perditio";

export class Venenum extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Venenum.svg";

    if (ver_emthy) {
      super(EnLevel.Tier1, path_img, [], []);
    } else {
      super(EnLevel.Tier1, path_img, [
        new Aqua(true),
        new Perditio(true)
      ], [
        new Aqua(true),
        new Perditio(true)
      ]);
    }
  }
}
