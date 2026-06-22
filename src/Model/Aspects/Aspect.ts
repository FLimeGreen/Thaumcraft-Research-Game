import { EnLevel } from "./Enum_Level";

export abstract class Aspect {

  public readonly Level: EnLevel;
  public readonly IMG: string;
  public readonly Bestandteile: Aspect[];
  public readonly Verbindungen: Aspect[];

  constructor(level: EnLevel, img: string, best: Aspect[], verb: Aspect[]) {
    this.Level = level;
    this.IMG = img;
    this.Bestandteile = best;
    this.Verbindungen = verb;
  }

  // Aspect.ts
  canConnectTo(other: Aspect): boolean {
    const otherName = other.constructor.name;
    const thisName = this.constructor.name;

    console.log(`Checking connection from ${thisName} to ${otherName}`);

    const thisCanConnect = this.Verbindungen.some(v => v.constructor.name === otherName);
    const otherCanConnect = other.Verbindungen.some(v => v.constructor.name === thisName);

    console.log(`${thisName} → ${otherName}: ${thisCanConnect} | ${otherName} → ${thisName}: ${otherCanConnect}`);

    return thisCanConnect || otherCanConnect;
  }
}
