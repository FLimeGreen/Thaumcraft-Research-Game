import { Aspect } from "../Aspect";
import { Victus } from "../Level1/Victus";
import { Vitreus } from "../Level1/Vitreus";

export class Terra extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img :string = "/assets/svgs/Terra.svg";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, [
                new Victus(false),
                new Vitreus(false)
            ]);
        }
    }
}