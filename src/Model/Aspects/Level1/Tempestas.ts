import { Aspect } from "../Aspect";
import { Aer } from "../Primal/Aer";
import { Aqua } from "../Primal/Aqua";

export class Tempestas extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img: string = "/assets/svgs/Tempestas.svg";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, [new Aer(false), new Aqua(false)]);
        }
    }
}