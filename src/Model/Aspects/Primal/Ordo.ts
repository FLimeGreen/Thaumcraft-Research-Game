import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Motus } from "../Level1/Motus";
import { Permutatio } from "../Level1/Permutatio";
import { Potentia } from "../Level1/Potentia";
import { Vitreus } from "../Level1/Vitreus";

export class Ordo extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img :string = "/assets/svgs/Ordo.svg";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, [
                new Motus(true),
                new Permutatio(true),
                new Potentia(true),
                new Vitreus(true)
            ]);
        }
    }
}