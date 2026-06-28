import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Potentia } from "../Level1/Potentia";
import { Vacuos } from "../Level1/Vacuos";

export class Praecantatio extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Praecantatio.svg";

    if (ver_emthy) {
      super(EnLevel.Tier2, path_img, [], []);
    } else {
      super(EnLevel.Tier2, path_img, [
        new Potentia(true),
        new Vacuos(true)
      ], [
        new Potentia(true),
        new Vacuos(true)
      ]);
    }
  }
}
