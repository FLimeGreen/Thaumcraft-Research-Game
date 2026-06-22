import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Tempestas } from "../Level1/Tempestas";
import { Venenum } from "../Level1/Venenum";
import { Victus } from "../Level1/Victus";

export class Aqua extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Aqua.svg";

    if (ver_emthy) {
      super(EnLevel.Primal, path_img, [], []);
    } else {
      super(EnLevel.Primal, path_img, [], [
        new Tempestas(true),
        new Venenum(true),
        new Victus(true)
      ]);
    }
  }
}
