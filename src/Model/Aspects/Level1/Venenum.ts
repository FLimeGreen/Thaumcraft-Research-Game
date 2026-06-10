import { Aspect } from "../Aspect";
import { Aqua } from "../Primal/Aqua";
import { Perditio } from "../Primal/Perditio";

export class Venenum extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img: string = "/assets/svgs/Venenum.svg";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, [new Aqua(false), new Perditio(false)]);
        }
    }
}