import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Humanus } from "../Level5/Humanus";
import { Ordo } from "../Primal/Ordo";

export class Instrumentum extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Instrumentum.svg";

    if (ver_emthy) {
      super(EnLevel.Tier6, path_img, [], []);
    } else {
      super(EnLevel.Tier6, path_img, [
        new Ordo(true),
        new Humanus(true)
      ], [
        new Ordo(true),
        new Humanus(true)
      ]);
    }
  }
}
