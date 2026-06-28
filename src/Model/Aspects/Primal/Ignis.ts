import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Gelum } from "../Level1/Gelum";
import { Lux } from "../Level1/Lux";
import { Potentia } from "../Level1/Potentia";
import { Cognitio } from "../Level4/Cognitio";

export class Ignis extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Ignis.svg";

    if (ver_emthy) {
      super(EnLevel.Primal, path_img, [], []);
    } else {
      super(EnLevel.Primal, path_img, [], [
        new Gelum(true),
        new Lux(true),
        new Potentia(true),
        new Cognitio(true)
      ]);
    }
  }
}
