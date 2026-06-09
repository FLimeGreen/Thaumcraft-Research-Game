export abstract class Aspect{

    public readonly Level : EnLevel;
    public readonly IMG : string;
    public readonly Verbindungen : Aspect[];

    constructor(level:EnLevel, img: string, verb: Aspect[]){
        this.Level = level;
        this.IMG = img;
        this.Verbindungen = verb;
    }
}