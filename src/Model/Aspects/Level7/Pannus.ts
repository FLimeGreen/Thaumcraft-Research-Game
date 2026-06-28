import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Bestia } from "../Level2/Bestia";
import { Instrumentum } from "../Level6/Instrumentum";

export class Pannus extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Pannus.svg";

    if (ver_emthy) {
      super(EnLevel.Tier7, path_img, [], []);
    } else {
      super(EnLevel.Tier7, path_img, [
        new Bestia(true),
        new Instrumentum(true)
      ], [
        new Bestia(true),
        new Instrumentum(true)
      ]);
    }
  }
}
