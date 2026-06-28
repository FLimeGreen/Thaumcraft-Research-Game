import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Victus } from "../Level1/Victus";
import { Vitreus } from "../Level1/Vitreus";
import { Herba } from "../Level2/Herba";
import { Iter } from "../Level2/Iter";
import { Metallum } from "../Level2/Metallum";
import { Tutamen } from "../Level7/Tutamen";
import { Perditio } from "./Perditio";

export class Terra extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Terra.svg";

    if (ver_emthy) {
      super(EnLevel.Primal, path_img, [], []);
    } else {
      super(EnLevel.Primal, path_img, [], [
        new Victus(true),
        new Vitreus(true),
        new Herba(true),
        new Iter(true),
        new Metallum(true),
        new Perditio(true),
        new Tutamen(true),
        new Tutamen(true)
      ]);
    }
  }
}
