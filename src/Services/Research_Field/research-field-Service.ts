import { EventEmitter, Injectable, Output } from '@angular/core';
import { Aspect } from '../../Model/Aspects/Aspect';
import { Aer } from '../../Model/Aspects/Primal/Aer';
import { Aqua } from '../../Model/Aspects/Primal/Aqua';
import { Ignis } from '../../Model/Aspects/Primal/Ignis';
import { Ordo } from '../../Model/Aspects/Primal/Ordo';
import { Perditio } from '../../Model/Aspects/Primal/Perditio';
import { Terra } from '../../Model/Aspects/Primal/Terra';
import { randomNumber } from '../../Model/randomNumber';
import { ListofallAspects } from '../../Model/Aspects/ListofallAspects';

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
        this.generateNewResearch();
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

    generateNewResearch(): void {
        // Beispiel: Alle Hexagone zurücksetzen
        for (let x = 0; x < this.NumberOfCols; x++) {
            for (let y = 0; y < this.NumberOfRows; y++) {
                const key = this.toKey(x, y);
                this.researchField[key] = null;
                this.DicChanged.emit(key);
            }
        }

        const randomFixed = randomNumber(2, 5); // 1-3 Aspekte
        const keys = Object.keys(this.researchField); // alle verfügbaren Felder
  
        for (let i = 0; i < randomFixed; i++) {
            // Zufälliges leeres Feld
            const emptyKeys = keys.filter(k => !this.researchField[k]);
            if (emptyKeys.length === 0) break;
            const randomKey = emptyKeys[randomNumber(emptyKeys.length)];

            // Zufälligen Aspekt
            const aspectClass = ListofallAspects.ListOfAllAspects[randomNumber(ListofallAspects.ListOfAllAspects.length)];
            this.researchField[randomKey] = aspectClass;
            this.DicChanged.emit(randomKey);
        }
    }

    checkifResearchIsComplete(): boolean {

        // Nur belegte Felder sammeln
        let AspektsFound: HexDictionary = {};
        for (const key in this.researchField) {
            const aspect = this.researchField[key];
            if (aspect) {
                AspektsFound[key] = aspect;
            }
        }
        if (Object.keys(AspektsFound).length === 0) { return false; }

        console.log("Aspects Found: More than One");
        console.log(AspektsFound);

        // Union-Find Setup
        const parent: { [key: string]: string } = {};
        const find = (k: string): string => {
            if (parent[k] !== k) parent[k] = find(parent[k]);
            return parent[k];
        };
        const union = (a: string, b: string) => {
            parent[find(a)] = find(b);
        };

        // Jeden Aspekt als eigene Gruppe initialisieren
        for (const key in AspektsFound) {
            parent[key] = key;
        }

        // Nachbarn bei Offset-Grid (flat-top Hexagon)
        const getNeighborKeys = (x: number, y: number): string[] => {
            const isOdd = x % 2 === 1;
            const neighbors = isOdd
                ? [ [x+1, y], [x-1, y], [x, y-1], [x, y+1], [x+1, y+1], [x-1, y+1] ]
                : [ [x+1, y], [x-1, y], [x, y-1], [x, y+1], [x+1, y-1], [x-1, y-1] ];
            return neighbors.map(([nx, ny]) => this.toKey(nx, ny));
        };

        // Nachbarn verbinden wenn Verbindung möglich
        for (const key in AspektsFound) {
            const [x, y] = this.toTuple(key);
            const aspect = AspektsFound[key]!;

            console.log(`Checking neighbors for ${key} (${aspect.constructor.name})`);
            for (const neighborKey of getNeighborKeys(x, y)) {
                const neighbor = AspektsFound[neighborKey];
                if (!neighbor) continue;

                console.log(`Checking connection between ${key} and ${neighborKey}`);

                if (aspect.canConnectTo(neighbor)) {
                    union(key, neighborKey);
                    console.log(`Connected ${key} and ${neighborKey}`);
                }
          }
        }

        // Alle in einer Gruppe? → Forschung komplett
        const roots = new Set(Object.keys(AspektsFound).map(find));
        console.log("Unique Groups Found:", roots.size);
        return roots.size === 1;
    }
}
