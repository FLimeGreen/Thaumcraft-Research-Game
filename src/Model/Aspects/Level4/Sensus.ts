import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Spiritus } from "../Level3/Spiritus";
import { Aer } from "../Primal/Aer";

export class Sensus extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Sensus.svg";

    if (ver_emthy) {
      super(EnLevel.Tier1, path_img, [], []);
    } else {
      super(EnLevel.Tier1, path_img, [
        new Aer(true),
        new Spiritus(true)
      ], [
        new Aer(true),
        new Spiritus(true)
      ]);
    }
  }
}
