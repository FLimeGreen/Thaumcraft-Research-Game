import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Gelum } from "../Level1/Gelum";
import { Permutatio } from "../Level1/Permutatio";
import { Vacuos } from "../Level1/Vacuos";
import { Venenum } from "../Level1/Venenum";
import { Mortuus } from "../Level2/Mortuus";
import { Vinculum } from "../Level2/Vinculum";

export class Perditio extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Perditio.svg";

    if (ver_emthy) {
      super(EnLevel.Primal, path_img, [], []);
    } else {
      super(EnLevel.Primal, path_img, [], [
        new Gelum(true),
        new Permutatio(true),
        new Vacuos(true),
        new Venenum(true),
        new Mortuus(true),
        new Vinculum(true)
      ]);
    }
  }
}
