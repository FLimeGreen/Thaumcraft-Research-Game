import { Component } from '@angular/core';
import { ResearchInventoryField } from '../../Research/research-inventory-field/research-inventory-field';
import { GoldRankDisplay } from '../../gold-rank-display/gold-rank-display';

@Component({
  selector: 'app-fusion-aspects-view',
  imports: [GoldRankDisplay, ResearchInventoryField],
  templateUrl: './fusion-aspects-view.html',
  styleUrl: './fusion-aspects-view.css',
})
export class FusionAspectsView { }
