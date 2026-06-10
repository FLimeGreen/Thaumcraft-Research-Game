import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Ordo } from "../Primal/Ordo";
import { Terra } from "../Primal/Terra";

export class Vitreus extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img: string = "/assets/svgs/Vitreus.svg";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, [
                new Ordo(true),
                new Terra(true)
            ]);
        }
    }
}