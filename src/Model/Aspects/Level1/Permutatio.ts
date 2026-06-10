import { Aspect } from "../Aspect";
import { Ordo } from "../Primal/Ordo";
import { Perditio } from "../Primal/Perditio";

export class Permutatio extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img: string = "/assets/svgs/Permutatio.svg";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, [new Ordo(false), new Perditio(false)]);
        }
    }
}