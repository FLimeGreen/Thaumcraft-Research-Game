import { Injectable } from '@angular/core';

interface HexDictionary {
  [key: string]: number;
}

const toKey = (x: number, y: number) => `${x},${y}`;

@Injectable({
  providedIn: 'root',
})
export class ResearchFieldService {

  public readonly NumberOfRows:number = 20;
  public readonly NumberOfCols:number = 20;

  private researchField: HexDictionary = {};


  constructor() {
    for (let x = 0; x < this.NumberOfCols; x++) {
      for (let y = 0; y < this.NumberOfRows; y++) {
        const key = toKey(x, y);
        this.researchField[key] = x * y; // Initialwert für alle Hexagone
      }
    }
  }

  getHexagonValue(x: number, y: number): number {
    const key = toKey(x, y);
    return this.researchField[key] || -1;
  }

  setHexagonValue(x: number, y: number, value: number): void {
    const key = toKey(x, y);
    this.researchField[key] = value;
  }

}
