import { EventEmitter, Injectable, Output } from '@angular/core';
import { Aspect } from '../../Model/Aspects/Aspect';
import { Aer } from '../../Model/Aspects/Primal/Aer';
import { Aqua } from '../../Model/Aspects/Primal/Aqua';
import { Ignis } from '../../Model/Aspects/Primal/Ignis';
import { Ordo } from '../../Model/Aspects/Primal/Ordo';
import { Perditio } from '../../Model/Aspects/Primal/Perditio';
import { Terra } from '../../Model/Aspects/Primal/Terra';

interface HexDictionary {
  [key: string]: Aspect | null;
}

@Injectable({
  providedIn: 'root',
})
export class ResearchFieldService {

  public readonly NumberOfRows:number = 10;
  public readonly NumberOfCols:number = 27;

  private researchField: HexDictionary = {};

  public readonly ListOfAspectsInventory: Aspect[] = [
    new Aer(true), 
    new Aqua(true), 
    new Ignis(true), 
    new Ordo(true), 
    new Perditio(true), 
    new Terra(true)
  ];

  public SelectedAspectInventory: Aspect | null = null;

  @Output() DicChanged = new EventEmitter<string>();

  constructor() {
    for (let x = 0; x < this.NumberOfCols; x++) {
      for (let y = 0; y < this.NumberOfRows; y++) {
        const key = this.toKey(x, y);
        this.researchField[key] = null; // Initialwert für alle Hexagone
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

  getHexagonValue(x: number, y: number): Aspect | null {
    const key = this.toKey(x, y);
    return this.researchField[key];
  }

  setHexagonValue(x: number, y: number, value: Aspect | null): void {
    const key = this.toKey(x, y);
    this.researchField[key] = value;
    this.DicChanged.emit(key);
  }

}
