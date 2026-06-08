import { EventEmitter, Injectable, Output } from '@angular/core';

interface HexDictionary {
  [key: string]: number;
}

@Injectable({
  providedIn: 'root',
})
export class ResearchFieldService {

  public readonly NumberOfRows:number = 20;
  public readonly NumberOfCols:number = 20;

  private researchField: HexDictionary = {};

  @Output() DicChanged = new EventEmitter<string>();

  constructor() {
    for (let x = 0; x < this.NumberOfCols; x++) {
      for (let y = 0; y < this.NumberOfRows; y++) {
        const key = this.toKey(x, y);
        this.researchField[key] = x * y; // Initialwert für alle Hexagone
        this.DicChanged.emit(key);
      }
    }
  }

  toKey(x: number, y: number): string {
    return `${x},${y}`;
  }

  toTuple(key: string): [number, number] {
    const parts = key.split(',').map((v) => Number(v));
    if (parts.length === 2) {
      return [parts[0], parts[1]];
    }
    throw new Error(`Invalid key format: ${key}`);
  }

  getHexagonValue(x: number, y: number): number {
    const key = this.toKey(x, y);
    const value = this.researchField[key];
    return value === undefined ? -1 : value;
  }

  setHexagonValue(x: number, y: number, value: number): void {
    const key = this.toKey(x, y);
    this.researchField[key] = value;
    this.DicChanged.emit(key);
  }

}
