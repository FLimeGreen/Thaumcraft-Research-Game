import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Herba } from "../Level2/Herba";
import { Humanus } from "../Level5/Humanus";

export class Messis extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Messis.svg";

    if (ver_emthy) {
      super(EnLevel.Tier6, path_img, [], []);
    } else {
      super(EnLevel.Tier6, path_img, [
        new Herba(true),
        new Humanus(true)
      ], [
        new Herba(true),
        new Humanus(true)
      ]);
    }
  }
}
