import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Bestia } from "../Level2/Bestia";
import { Mortuus } from "../Level2/Mortuus";

export class Corpus extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Corpus.svg";

    if (ver_emthy) {
      super(EnLevel.Tier3, path_img, [], []);
    } else {
      super(EnLevel.Tier3, path_img, [
        new Bestia(true),
        new Mortuus(true)
      ], [
        new Bestia(true),
        new Mortuus(true)
      ]);
    }
  }
}
