import { Aspect } from "../Aspect";

export class Terra extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img :string = "terra.png";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, []);
        }
    }
}