import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Spiritus } from "../Level3/Spiritus";
import { Ignis } from "../Primal/Ignis";

export class Cognitio extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Cognitio.svg";

    if (ver_emthy) {
      super(EnLevel.Tier3, path_img, [], []);
    } else {
      super(EnLevel.Tier3, path_img, [
        new Ignis(true),
        new Spiritus(true)
      ], [
        new Ignis(true),
        new Spiritus(true)
      ]);
    }
  }
}
