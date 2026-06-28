import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Fames } from "../Level2/Fames";
import { Humanus } from "../Level5/Humanus";

export class Lucrum extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Lucrum.svg";

    if (ver_emthy) {
      super(EnLevel.Tier6, path_img, [], []);
    } else {
      super(EnLevel.Tier6, path_img, [
        new Fames(true),
        new Humanus(true)
      ], [
        new Fames(true),
        new Humanus(true)
      ]);
    }
  }
}
