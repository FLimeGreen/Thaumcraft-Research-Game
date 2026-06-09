import { Aspect } from "../Aspect";

export class Ordo extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img :string = "ordo.png";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, []);
        }
    }
}