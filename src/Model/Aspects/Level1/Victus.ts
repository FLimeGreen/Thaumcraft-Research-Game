import { Aspect } from "../Aspect";
import { Aqua } from "../Primal/Aqua";
import { Terra } from "../Primal/Terra";

export class Victus extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img: string = "/assets/svgs/victus.svg";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, [new Aqua(false), new Terra(false)]);
        }
    }
}