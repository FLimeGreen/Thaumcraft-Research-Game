import { Aspect } from "../Aspect";

export class Aer extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img :string = "aer.png";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, []);
        }
    }
}