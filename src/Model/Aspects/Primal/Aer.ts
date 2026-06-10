import { Aspect } from "../Aspect";
import { Lux } from "../Level1/Lux";
import { Motus } from "../Level1/Motus";
import { Tempestas } from "../Level1/Tempestas";
import { Vacuos } from "../Level1/Vacuos";

export class Aer extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img :string = "/assets/svgs/Aer.svg";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, [
                new Lux(false), 
                new Motus(false),
                new Tempestas(false),
                new Vacuos(false)
            ]);
        }
    }
}