import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheatSheetService } from '../../../Services/CheatSheet/cheat-sheet-service';

@Component({
  selector: 'app-cheat-sheet',
  imports: [CommonModule],
  templateUrl: './cheat-sheet.html',
  styleUrl: './cheat-sheet.css',
})
export class CheatSheet {

  public Signal = signal(false);
  constructor(private CheatSheetService: CheatSheetService) {
    this.Signal = this.CheatSheetService.CheatSheetSignal;
  }

}
