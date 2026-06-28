import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Motus } from "../Level1/Motus";
import { Mortuus } from "../Level2/Mortuus";

export class Exanimis extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Exanimis.svg";

    if (ver_emthy) {
      super(EnLevel.Tier3, path_img, [], []);
    } else {
      super(EnLevel.Tier3, path_img, [
        new Motus(true),
        new Mortuus(true)
      ], [
        new Motus(true),
        new Mortuus(true)
      ]);
    }
  }
}
