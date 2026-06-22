import { Component } from '@angular/core';
import { ResearchInventoryField } from '../../Research/research-inventory-field/research-inventory-field';
import { GoldRankDisplay } from '../../gold-rank-display/gold-rank-display';
import { FusionItem } from '../fusion-item/fusion-item';

@Component({
  selector: 'app-fusion-aspects-view',
  imports: [GoldRankDisplay, ResearchInventoryField, FusionItem],
  templateUrl: './fusion-aspects-view.html',
  styleUrl: './fusion-aspects-view.css',
})
export class FusionAspectsView { }
