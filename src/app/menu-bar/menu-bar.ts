import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  imports: [],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css',
})
export class MenuBar {

  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  onResearchClick() {
    this.router.navigate(["/research"]);
  }

  onBasarClick() {
    this.router.navigate(["/basar"]);
  }
}
