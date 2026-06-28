import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Humanus } from "../Level5/Humanus";
import { Instrumentum } from "../Level6/Instrumentum";

export class Fabrico extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Fabrico.svg";

    if (ver_emthy) {
      super(EnLevel.Tier7, path_img, [], []);
    } else {
      super(EnLevel.Tier7, path_img, [
        new Humanus(true),
        new Instrumentum(true)
      ], [
        new Humanus(true),
        new Instrumentum(true)
      ]);
    }
  }
}
