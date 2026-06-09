import { Aspect } from "../Aspect";

export class Ignis  extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img :string = "ignis.png";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, []);
        }
    }
}