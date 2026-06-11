import { Component, Input, OnInit, OnDestroy, signal, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResearchFieldService } from '../../Services/Research_Field/research-field-Service';

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
  ) {}

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
  
  @Input() set triggerClick(val: {x: number, y: number} | null) {
    if (val && val.x === this.col && val.y === this.row) {
      this.onHexClick();
    }
  }

  onHexClick(): void {
    this.researchFieldService.setHexagonValue(this.col, this.row, this.researchFieldService.SelectedAspectInventory);
    this.updateAnzeige();
  }

  private updateAnzeige(): void {
    const val = this.researchFieldService.getHexagonValue(this.col, this.row);
    this.Anzeige.set(val ? val.IMG : "");
  }
}
