import { Component, Input, ViewChild, ElementRef, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Hexagon {
  id: number;
  row: number;
  col: number;
  x: number;
  y: number;
  size: number;
}

@Component({
  selector: 'app-research-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research-field.html',
  styleUrls: ['./research-field.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResearchField implements OnInit, AfterViewInit, OnDestroy {
  @Input() rows: number = 20;
  @Input() cols: number = 20;
  @ViewChild('container', { static: false }) container?: ElementRef<HTMLDivElement>;

  hexagons: Hexagon[] = [];
  containerWidth: number = 600;
  containerHeight: number = 500;
  hexSize: number = 0;
  private resizeObserver?: ResizeObserver;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    // Initial layout mit Default-Werten
    this.calculateLayout();
  }

  ngAfterViewInit(): void {
    if (!this.container) {
      return;
    }

    // Nur im Browser-Kontext arbeiten
    if (typeof window === 'undefined') {
      return;
    }

    this.updateContainerSize();

    // ResizeObserver für responsive Verhalten
    this.ngZone.runOutsideAngular(() => {
      this.resizeObserver = new ResizeObserver(() => {
        this.ngZone.run(() => {
          this.updateContainerSize();
        });
      });

      if (this.container) {
        this.resizeObserver.observe(this.container.nativeElement);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private updateContainerSize(): void {
    if (!this.container?.nativeElement) {
      return;
    }

    const element = this.container.nativeElement;
    this.containerWidth = element.offsetWidth || this.containerWidth;
    this.containerHeight = element.offsetHeight || this.containerHeight;

    if (this.containerWidth > 0 && this.containerHeight > 0) {
      this.calculateLayout();
      this.changeDetector.markForCheck();
    }
  }

  private calculateLayout(): void {
    // Berechne die optimale Größe für Hexagone basierend auf Container-Größe
    // Für flat-top Hexagone: Breite = size, Höhe = size * √3 / 2

    const sqrt3 = Math.sqrt(3);

    // Verfügbare Breite und Höhe
    const availableWidth = this.containerWidth;
    const availableHeight = this.containerHeight;

    // Berechne Hexagon-Größe basierend auf Höhe
    // Bei n Zeilen: Höhe = (n + 0.5) * hexSize * √3 / 2
    const heightBasedSize = (availableHeight * 2) / ((this.rows + 0.5) * sqrt3);

    // Berechne Hexagon-Größe basierend auf Breite
    // Bei m Spalten: Breite = (m + 0.25) * hexSize * 1.5
    const widthBasedSize = availableWidth / ((this.cols + 0.25) * 1.5);

    // Verwende die kleinere Größe, um alles in den Container zu passen
    this.hexSize = Math.min(heightBasedSize, widthBasedSize);

    // Berechne Positionen aller Hexagone
    this.hexagons = [];
    let hexId = 0;

    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        // Berechne Position basierend auf Offsetted Grid
        const hexWidth = this.hexSize;
        const hexHeight = this.hexSize * sqrt3 / 2;

        // X-Position
        const x = col * (hexWidth * 0.75);

        // Y-Position - ungerade Spalten sind versetzt
        let y = row * hexHeight;
        if (col % 2 === 1) {
          y += hexHeight / 2;
        }

        // Zentriere das Grid im Container
        const totalWidth = (this.cols - 1) * (hexWidth * 1.5) + hexWidth;
        const totalHeight = (this.rows - 1) * hexHeight + hexHeight;

        const offsetX = (availableWidth - totalWidth) / 2;
        const offsetY = (availableHeight - totalHeight) / 2;

        this.hexagons.push({
          id: hexId++,
          row,
          col,
          x: offsetX + x,
          y: offsetY + y,
          size: this.hexSize,
        });
      }
    }
  }

  getHexagonPoints(hex: Hexagon): string {
    const size = hex.size;
    const centerX = hex.x + size / 2;
    const centerY = hex.y + size / 2;

    // Berechne die 6 Punkte eines flat-top Hexagons
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const pointX = centerX + (size / 2) * Math.cos(angle);
      const pointY = centerY + (size / 2) * Math.sin(angle);
      points.push(`${pointX},${pointY}`);
    }

    return points.join(' ');
  }

  getHexagonStyle(hex: Hexagon): any {
    return {
      left: hex.x + 'px',
      top: hex.y + 'px',
      width: hex.size + 'px',
      height: (hex.size * Math.sqrt(3) / 2) + 'px',
    };
  }
}
