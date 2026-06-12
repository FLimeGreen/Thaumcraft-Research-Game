import { EnLevel } from "./Enum_Level";

export abstract class Aspect{

    public readonly Level : EnLevel;
    public readonly IMG : string;
    public readonly Verbindungen : Aspect[];

    constructor(level:EnLevel, img: string, verb: Aspect[]){
        this.Level = level;
        this.IMG = img;
        this.Verbindungen = verb;
    }

    // Aspect.ts
    canConnectTo(other: Aspect): boolean {
        return  this.Verbindungen.some(v => other instanceof (v as any).constructor) ||
                other.Verbindungen.some(v => this instanceof (v as any).constructor);
    }
}