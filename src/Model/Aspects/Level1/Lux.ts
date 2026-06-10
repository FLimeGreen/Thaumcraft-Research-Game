import { Aspect } from "../Aspect";
import { Aer } from "../Primal/Aer";
import { Ignis } from "../Primal/Ignis";

export class Lux extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img: string = "/assets/svgs/lux.svg";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, [new Ignis(false), new Aer(false)]);
        }
    }
}