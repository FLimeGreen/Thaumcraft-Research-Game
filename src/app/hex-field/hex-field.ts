import { Component, Input, OnInit, OnDestroy, signal, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResearchFieldService } from '../../Services/Research_Field/research-field-Service';
import { ResearchInventory } from '../../Services/Inventory_Aspects/research-inventory';

@Component({
  selector: 'app-hex-field',
  templateUrl: './hex-field.html',
  styleUrls: ['./hex-field.css']
})
export class HexField implements OnInit, OnDestroy {
  @Input() row: number = 0;
  @Input() col: number = 0;

  public Anzeige = signal("");
  private dicSub?: Subscription;

  constructor(
    private researchFieldService: ResearchFieldService,
    private researchInventory: ResearchInventory
  ) { }

  ngOnInit(): void {
    // initialen Wert setzen
    this.updateAnzeige();

    // auf Änderungen am Dictionary reagieren
    this.dicSub = this.researchFieldService.DicChanged.subscribe((key: string) => {
      const [x, y] = this.researchFieldService.toTuple(key);
      if (x === this.col && y === this.row) {
        this.updateAnzeige();
      }
    });
  }

  ngOnDestroy(): void {
    this.dicSub?.unsubscribe();
  }

  @Input() set triggerClick(val: { x: number, y: number } | null) {
    if (val && val.x === this.col && val.y === this.row) {
      this.onHexClick();
    }
  }

  onHexClick(): void {
    if (this.researchFieldService.getHexagonLock(this.col, this.row)) { return; }
    // Check if Delete or Place
    const ToPlaceAspect = this.researchFieldService.SelectedAspectInventory;
    const AspectInPlace = this.researchFieldService.getHexagonValue(this.col, this.row);

    if (ToPlaceAspect !== null) {
      // Irgend ein Aspect

      // Ist mehr als 0 Aspekt da?
      const count = this.researchInventory.getCount(ToPlaceAspect);
      if (count <= 0 || isNaN(count)) { return; }

      // Shaue ob ein Aspect da ist.
      if (AspectInPlace !== null) {
        // Ist da
        // Füge altes dem Inventar hinzu.
        this.researchInventory.addInventoryCount(AspectInPlace);
      }

      // Ersetze den Aspect.
      this.researchInventory.subInventoryCount(ToPlaceAspect);
      this.researchFieldService.setHexagonValue(this.col, this.row, ToPlaceAspect);
    }
    else {
      // Löschen eines Aspectes

      // Inventar add AspectInPlace +1
      if (AspectInPlace !== null) {
        this.researchInventory.addInventoryCount(AspectInPlace);
      }
      this.researchFieldService.setHexagonValue(this.col, this.row, ToPlaceAspect);
    }

    this.updateAnzeige();
  }

  private updateAnzeige(): void {
    const val = this.researchFieldService.getHexagonValue(this.col, this.row);
    this.Anzeige.set(val ? val.IMG : "");
  }
}
