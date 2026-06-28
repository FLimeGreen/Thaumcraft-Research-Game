import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Lux } from "../Level1/Lux";
import { Motus } from "../Level1/Motus";
import { Tempestas } from "../Level1/Tempestas";
import { Vacuos } from "../Level1/Vacuos";
import { Volatus } from "../Level2/Volatus";
import { Arbor } from "../Level3/Arbor";
import { Auram } from "../Level3/Auram";
import { Sensus } from "../Level4/Sensus";

export class Aer extends Aspect {
  constructor(ver_emthy: boolean = false) {

    const path_img: string = "/assets/svgs/Aer.svg";

    if (ver_emthy) {
      super(EnLevel.Primal, path_img, [], []);
    } else {
      super(EnLevel.Primal, path_img, [], [
        new Lux(true),
        new Motus(true),
        new Tempestas(true),
        new Vacuos(true),
        new Volatus(true),
        new Arbor(true),
        new Auram(true),
        new Sensus(true)
      ]);
    }
  }
}
