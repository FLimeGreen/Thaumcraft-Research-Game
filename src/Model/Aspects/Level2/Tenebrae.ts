import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Lux } from "../Level1/Lux";
import { Perditio } from "../Primal/Perditio";

export class Tenebrae extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Tenebrae.svg";

    if (ver_emthy) {
      super(EnLevel.Tier2, path_img, [], []);
    } else {
      super(EnLevel.Tier2, path_img, [
        new Perditio(true),
        new Lux(true)
      ], [
        new Perditio(true),
        new Lux(true)
      ]);
    }
  }
}
