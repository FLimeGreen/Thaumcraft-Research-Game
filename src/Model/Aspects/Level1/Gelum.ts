import { Aspect } from "../Aspect";
import { EnLevel } from "../Enum_Level";
import { Ignis } from "../Primal/Ignis";
import { Perditio } from "../Primal/Perditio";

export class Gelum extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img: string = "/assets/svgs/Gelum.svg";
        
        if (ver_emthy) {
            super(EnLevel.Tier1, path_img, []);
        } else {
            super(EnLevel.Tier1, path_img, [
                new Ignis(true), 
                new Perditio(true)
            ]);
        }
    }
}