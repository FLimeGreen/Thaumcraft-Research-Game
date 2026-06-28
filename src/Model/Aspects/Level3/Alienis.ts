import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Vacuos } from "../Level1/Vacuos";
import { Tenebrae } from "../Level2/Tenebrae";


export class Alienis extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Alienis.svg";

    if (ver_emthy) {
      super(EnLevel.Tier3, path_img, [], []);
    } else {
      super(EnLevel.Tier3, path_img, [
        new Vacuos(true),
        new Tenebrae(true)
      ], [
        new Vacuos(true),
        new Tenebrae(true)
      ]);
    }
  }
}
