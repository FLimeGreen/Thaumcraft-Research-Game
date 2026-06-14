import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheatSheetService {

  public CheatSheetSignal = signal(false);

  private cheatsheet = false;

  onChange() {
    this.cheatsheet = !this.cheatsheet;
    this.CheatSheetSignal.set(this.cheatsheet);
  }
}
