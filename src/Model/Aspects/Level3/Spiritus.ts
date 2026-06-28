import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Victus } from "../Level1/Victus";
import { Mortuus } from "../Level2/Mortuus";

export class Spiritus extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Spiritus.svg";

    if (ver_emthy) {
      super(EnLevel.Tier3, path_img, [], []);
    } else {
      super(EnLevel.Tier3, path_img, [
        new Victus(true),
        new Mortuus(true)
      ], [
        new Victus(true),
        new Mortuus(true)
      ]);
    }
  }
}
