import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Ignis } from "../Primal/Ignis";
import { Ordo } from "../Primal/Ordo";

export class Potentia extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img: string = "/assets/svgs/Potentia.svg";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, [
                new Ignis(true),
                new Ordo(true)
            ]);
        }
    }
}