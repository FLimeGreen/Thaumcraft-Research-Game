import { Aspect } from "../Aspect";
import { Gelum } from "../Level1/Gelum";
import { Permutatio } from "../Level1/Permutatio";
import { Vacuos } from "../Level1/Vacuos";
import { Venenum } from "../Level1/Venenum";

export class Perditio extends Aspect {
    constructor(ver_emthy:boolean = false){

        const path_img :string = "/assets/svgs/Perditio.svg";
        
        if (ver_emthy) {
            super(EnLevel.Primal, path_img, []);
        } else {
            super(EnLevel.Primal, path_img, [
                new Gelum(false),
                new Permutatio(false),
                new Vacuos(false),
                new Venenum(false)
            ]);
        }
    }
}