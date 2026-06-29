import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  imports: [],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css',
})
export class MenuBar {

  private router: Router;
  activeTab = signal<'research' | 'basar' | 'fusion' | 'defusion'>('research');

  constructor(router: Router) {
    this.router = router;
    this.activeTab.set('research');
  }

  onResearchClick() {
    this.router.navigate(["/research"]);
    this.activeTab.set('research');
  }

  onBasarClick() {
    this.router.navigate(["/basar"]);
    this.activeTab.set('basar');
  }

  onFusionClick() {
    this.router.navigate(["/fusion"]);
    this.activeTab.set('fusion');
  }

  onDefusionClick() {
    this.router.navigate(["/defusion"]);
    this.activeTab.set('defusion');
  }
}
