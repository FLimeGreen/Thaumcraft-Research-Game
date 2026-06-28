import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Humanus } from "../Level5/Humanus";
import { Fabrico } from "../Level7/Fabrico";
import { Machina } from "../Level7/Machina";
import { Meto } from "../Level7/Meto";
import { Pannus } from "../Level7/Pannus";
import { Telum } from "../Level7/Telum";
import { Tutamen } from "../Level7/Tutamen";
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
        new Humanus(true),
        new Fabrico(true),
        new Machina(true),
        new Meto(true),
        new Pannus(true),
        new Telum(true),
        new Tutamen(true)
      ]);
    }
  }
}
