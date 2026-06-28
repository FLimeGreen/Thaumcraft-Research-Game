import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Motus } from "../Level1/Motus";
import { Victus } from "../Level1/Victus";
import { Corpus } from "../Level3/Corpus";
import { Humanus } from "../Level5/Humanus";

export class Bestia extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Bestia.svg";

    if (ver_emthy) {
      super(EnLevel.Tier2, path_img, [], []);
    } else {
      super(EnLevel.Tier2, path_img, [
        new Motus(true),
        new Victus(true)
      ], [
        new Motus(true),
        new Victus(true),
        new Corpus(true),
        new Humanus(true)
      ]);
    }
  }
}
