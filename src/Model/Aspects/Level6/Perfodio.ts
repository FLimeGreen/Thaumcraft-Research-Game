import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Humanus } from "../Level5/Humanus";
import { Terra } from "../Primal/Terra";

export class Perfodio extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Perfodio.svg";

    if (ver_emthy) {
      super(EnLevel.Tier6, path_img, [], []);
    } else {
      super(EnLevel.Tier6, path_img, [
        new Terra(true),
        new Humanus(true)
      ], [
        new Terra(true),
        new Humanus(true)
      ]);
    }
  }
}
