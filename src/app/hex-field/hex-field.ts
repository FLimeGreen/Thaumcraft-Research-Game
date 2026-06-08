import { Component, Input } from '@angular/core';
import { ResearchFieldService } from '../../Services/Research_Field/research-field-Service';

@Component({
  selector: 'app-hex-field',
  imports: [],
  templateUrl: './hex-field.html',
  styleUrl: './hex-field.css',
})
export class HexField {
  @Input() row:number = 0;
  @Input() col:number = 0;

  public Anzeige: number = 0;

  constructor(private researchFieldService: ResearchFieldService) {

    this.Anzeige = this.researchFieldService.getHexagonValue(this.col, this.row);
  }
}
