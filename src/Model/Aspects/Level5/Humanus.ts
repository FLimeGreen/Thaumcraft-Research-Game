import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Bestia } from "../Level2/Bestia";
import { Cognitio } from "../Level4/Cognitio";
import { Instrumentum } from "../Level6/Instrumentum";
import { Lucrum } from "../Level6/Lucrum";
import { Messis } from "../Level6/Messis";
import { Perditio } from "../Primal/Perditio";

export class Humanus extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Humanus.svg";

    if (ver_emthy) {
      super(EnLevel.Tier5, path_img, [], []);
    } else {
      super(EnLevel.Tier5, path_img, [
        new Bestia(true),
        new Cognitio(true)
      ], [
        new Bestia(true),
        new Cognitio(true),
        new Instrumentum(true),
        new Lucrum(true),
        new Messis(true),
        new Perditio(true)
      ]);
    }
  }
}
