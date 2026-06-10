import { Aspect } from "../Aspect";
import { Aer } from "../Primal/Aer";
import { Perditio } from "../Primal/Perditio";

export class Vacuos extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img: string = "/assets/svgs/Vacuos.svg";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, [new Aer(false), new Perditio(false)]);
        }
    }
}