import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Aer } from "../Primal/Aer";
import { Aqua } from "../Primal/Aqua";

export class Tempestas extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img: string = "/assets/svgs/Tempestas.svg";
        
        if (ver_emthy) {
            super(EnLevel.Tier1, path_img, []);
        } else {
            super(EnLevel.Tier1, path_img, [
                new Aer(true),
                new Aqua(true)
            ]);
        }
    }
}