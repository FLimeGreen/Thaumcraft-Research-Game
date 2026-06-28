import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Vacuos } from "../Level1/Vacuos";
import { Victus } from "../Level1/Victus";

export class Fames extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Fames.svg";

    if (ver_emthy) {
      super(EnLevel.Tier2, path_img, [], []);
    } else {
      super(EnLevel.Tier2, path_img, [
        new Vacuos(true),
        new Victus(true)
      ], [
        new Vacuos(true),
        new Victus(true)
      ]);
    }
  }
}
