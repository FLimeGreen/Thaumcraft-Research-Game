import { Aspect } from "../Aspect";

export class Perditio extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img :string = "perditio.png";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, []);
        }
    }
}