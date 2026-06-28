import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Victus } from "../Level1/Victus";
import { Corpus } from "../Level3/Corpus";
import { Exanimis } from "../Level3/Exanimis";
import { Spiritus } from "../Level3/Spiritus";
import { Perditio } from "../Primal/Perditio";

export class Mortuus extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Mortuus.svg";

    if (ver_emthy) {
      super(EnLevel.Tier2, path_img, [], []);
    } else {
      super(EnLevel.Tier2, path_img, [
        new Perditio(true),
        new Victus(true)
      ], [
        new Perditio(true),
        new Victus(true),
        new Corpus(true),
        new Exanimis(true),
        new Spiritus(true)
      ]);
    }
  }
}
